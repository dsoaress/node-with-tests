import 'reflect-metadata'
import '../../container'

import express from 'express'

import { createTypeormConnection } from '../typeorm'
import { router } from './routes'

createTypeormConnection()
  .then(() => console.log('Typeorm connection created'))
  .catch(error => console.log(error))

const app = express()

app.use(express.json())
app.use(router)

export { app }
