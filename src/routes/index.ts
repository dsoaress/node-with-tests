import 'express-async-errors'

import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../../swagger.json'
import { AppError } from '../shared/errors/AppError'

import { categoriesRouter } from './categories.routes'
import { specificationsRouter } from './specifications.routes'
import { usersRouter } from './users.routes'
import { authenticateRouter } from './authenticate.routes'

import type { Request, NextFunction, Response } from 'express'

const router = Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
router.use('/authenticate', authenticateRouter)
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
