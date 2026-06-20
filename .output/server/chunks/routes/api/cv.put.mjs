import { d as defineEventHandler, u as useRuntimeConfig, c as createError, r as readBody, a as getCvStoragePool } from '../../nitro/nitro.mjs';
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

const cv_put = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (config.public.cvStorageDriver !== "mysql") {
    throw createError({
      statusCode: 400,
      statusMessage: "MySQL storage is not enabled."
    });
  }
  const body = await readBody(event);
  const locale = typeof (body == null ? void 0 : body.locale) === "string" ? body.locale : "en";
  const key = typeof (body == null ? void 0 : body.key) === "string" ? body.key : "default";
  const payload = body == null ? void 0 : body.payload;
  if (payload == null || typeof payload !== "object" || Array.isArray(payload)) {
    throw createError({
      statusCode: 400,
      statusMessage: "A JSON object payload is required."
    });
  }
  const pool = await getCvStoragePool();
  await pool.query(
    `
      INSERT INTO cv_documents (locale, cv_key, payload)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE
        payload = VALUES(payload),
        updated_at = CURRENT_TIMESTAMP
    `,
    [locale, key, JSON.stringify(payload)]
  );
  return {
    ok: true
  };
});

export { cv_put as default };
//# sourceMappingURL=cv.put.mjs.map
