import { d as defineEventHandler, u as useRuntimeConfig, g as getQuery, a as getCvStoragePool } from '../../nitro/nitro.mjs';
import 'mysql2/promise';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'ipx';

const cv_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (config.public.cvStorageDriver !== "mysql") {
    return {
      enabled: false,
      payload: null
    };
  }
  const query = getQuery(event);
  const locale = typeof query.locale === "string" ? query.locale : "en";
  const key = typeof query.key === "string" ? query.key : "default";
  const pool = await getCvStoragePool();
  const [rows] = await pool.query(
    `
      SELECT payload
      FROM cv_documents
      WHERE locale = ? AND cv_key = ?
      LIMIT 1
    `,
    [locale, key]
  );
  if (rows.length === 0) {
    return {
      enabled: true,
      payload: null
    };
  }
  return {
    enabled: true,
    payload: JSON.parse(rows[0].payload)
  };
});

export { cv_get as default };
//# sourceMappingURL=cv.get.mjs.map
