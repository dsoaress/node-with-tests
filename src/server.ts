import 'reflect-metadata'

import express from 'express'

import './database'
import './shared/container'
import { env } from './config/env'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`))
