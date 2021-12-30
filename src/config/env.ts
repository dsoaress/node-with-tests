import 'dotenv/config'

const { PORT, JWT_SECRET } = process.env

export const env = {
  PORT: PORT || 3010,
  JWT_SECRET: JWT_SECRET || 'secret',
  JWT_EXPIRES_AT: '1d', // 1 day
  REFRESH_TOKEN_EXPIRES_AT: '30' // 30 days
}
