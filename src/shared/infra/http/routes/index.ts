import 'express-async-errors'

import { NextFunction, Request, Response } from 'express'
import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import { AppError } from '@/shared/errors/AppError'

import swaggerFile from '../../../../../swagger.json'
import { authenticateRouter } from './authenticate.routes'
import { carsRouter } from './cars.routes'
import { categoriesRouter } from './categories.routes'
import { specificationsRouter } from './specifications.routes'
import { usersRouter } from './users.routes'

const router = Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
router.use('/authenticate', authenticateRouter)
router.use('/cars', carsRouter)
router.use('/categories', categoriesRouter)
router.use('/specifications', specificationsRouter)
router.use('/users', usersRouter)

router.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    res.status(error.status).json(error)
  } else {
    res.status(500).json({
      status: 500,
      error: error.message,
      timestamp: new Date().toISOString(),
      details: error
    })
  }

  next()
})

export { router }
