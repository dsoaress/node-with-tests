import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../../swagger.json'

import { categoriesRouter } from './categories.routes'
import { specificationsRouter } from './specifications.routes'

const router = Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
router.use('/categories', categoriesRouter)
router.use('/specifications', specificationsRouter)

export { router }
