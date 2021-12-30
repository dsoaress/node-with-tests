import multer, { diskStorage } from 'multer'
import { resolve } from 'path'
import cuid from 'cuid'

const uploadConfig = multer({
  storage: diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp'),
    filename: (_req, file, cb) => {
      const fileName = `${cuid()}-${file.originalname}`
      return cb(null, fileName)
    }
  })
})

export const upload = uploadConfig.single('file')
