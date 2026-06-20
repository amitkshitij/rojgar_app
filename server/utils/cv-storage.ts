import mysql from 'mysql2/promise'

let pool: mysql.Pool | null = null

export async function getCvStoragePool() {
  if (pool) {
    return pool
  }

  const config = useRuntimeConfig()

  if (
    !config.cvDatabaseHost
    || !config.cvDatabaseName
    || !config.cvDatabaseUser
    || !config.cvDatabasePassword
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: 'MySQL storage is enabled, but database configuration is incomplete.',
    })
  }

  pool = mysql.createPool({
    host: config.cvDatabaseHost,
    port: config.cvDatabasePort,
    database: config.cvDatabaseName,
    user: config.cvDatabaseUser,
    password: config.cvDatabasePassword,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4',
  })

  return pool
}
