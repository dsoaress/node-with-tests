import 'express-async-errors'

import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../../../../../swagger.json'
import { appErrorHandling } from '../middlewares/appErrorHandling'
import { notFoundErrorHandling } from '../middlewares/notFoundErrorHandling'
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

router.use(notFoundErrorHandling, appErrorHandling)

export { router }
