import 'dotenv/config'

const { PORT, JWT_SECRET, NODE_ENV } = process.env

export const env = {
  NODE_ENV: NODE_ENV || 'development',
  PORT: PORT || 3010,
  JWT_SECRET: JWT_SECRET || 'secret',
  JWT_EXPIRES_AT: '15m', // 15 minutes
  REFRESH_TOKEN_EXPIRES_AT: '30' // 30 days
}
