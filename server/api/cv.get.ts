import type { RowDataPacket } from 'mysql2/promise'
import { getCvStoragePool } from '../utils/cv-storage'

interface CvRow extends RowDataPacket {
  payload: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (config.public.cvStorageDriver !== 'mysql') {
    return {
      enabled: false,
      payload: null,
    }
  }

  const query = getQuery(event)
  const locale = typeof query.locale === 'string' ? query.locale : 'en'
  const key = typeof query.key === 'string' ? query.key : 'default'
  const pool = await getCvStoragePool()
  const [rows] = await pool.query<CvRow[]>(
    `
      SELECT payload
      FROM cv_documents
      WHERE locale = ? AND cv_key = ?
      LIMIT 1
    `,
    [locale, key],
  )

  if (rows.length === 0) {
    return {
      enabled: true,
      payload: null,
    }
  }

  return {
    enabled: true,
    payload: JSON.parse(rows[0].payload),
  }
})
