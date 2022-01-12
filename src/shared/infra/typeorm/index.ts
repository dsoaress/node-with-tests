import { createConnection } from 'typeorm'

export async function createTypeormConnection() {
  return await createConnection()
}
