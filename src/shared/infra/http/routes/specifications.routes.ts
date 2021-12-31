import { Router } from 'express'

import { CreateSpecificationController } from '@/cars/useCases/createSpecification/CreateSpecificationController'
import { DeleteSpecificationController } from '@/cars/useCases/deleteSpecification/DeleteSpecificationController'
import { FindAllSpecificationsController } from '@/cars/useCases/findAllSpecifications/FindAllSpecificationsController'
import { FindSpecificationController } from '@/cars/useCases/findSpecification/FindSpecificationController'
import { UpdateSpecificationController } from '@/cars/useCases/updateSpecification/UpdateSpecificationController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const specificationsRouter = Router()

const createSpecificationController = new CreateSpecificationController()
const findAllSpecificationsController = new FindAllSpecificationsController()
const findSpecificationController = new FindSpecificationController()
const updateSpecificationController = new UpdateSpecificationController()
const deleteSpecificationController = new DeleteSpecificationController()

specificationsRouter.use(ensureAuthenticated)
specificationsRouter.post('/', createSpecificationController.handle)
specificationsRouter.get('/', findAllSpecificationsController.handle)
specificationsRouter.get('/:id', findSpecificationController.handle)
specificationsRouter.put('/:id', updateSpecificationController.handle)
specificationsRouter.delete('/:id', deleteSpecificationController.handle)

export { specificationsRouter }
