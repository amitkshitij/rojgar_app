import { getCvStoragePool } from '../utils/cv-storage'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (config.public.cvStorageDriver !== 'mysql') {
    throw createError({
      statusCode: 400,
      statusMessage: 'MySQL storage is not enabled.',
    })
  }

  const body = await readBody(event)
  const locale = typeof body?.locale === 'string' ? body.locale : 'en'
  const key = typeof body?.key === 'string' ? body.key : 'default'
  const payload = body?.payload

  if (payload == null || typeof payload !== 'object' || Array.isArray(payload)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A JSON object payload is required.',
    })
  }

  const pool = await getCvStoragePool()

  await pool.query(
    `
      INSERT INTO cv_documents (locale, cv_key, payload)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE
        payload = VALUES(payload),
        updated_at = CURRENT_TIMESTAMP
    `,
    [locale, key, JSON.stringify(payload)],
  )

  return {
    ok: true,
  }
})
