import { stat, unlink } from 'fs/promises'
import { resolve } from 'path'

export const deleteFile = async (filename: string) => {
  const filePath = resolve(__dirname, '..', '..', 'tmp', filename)
  const fileExists = await stat(filePath)

  if (fileExists) {
    await unlink(filePath)
  }
}
