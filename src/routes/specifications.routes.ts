import { Router } from 'express'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { DeleteSpecificationController } from '../modules/cars/useCases/deleteSpecification/DeleteSpecificationController'
import { FindAllSpecificationsController } from '../modules/cars/useCases/findAllSpecifications/FindAllSpecificationsController'
import { FindSpecificationController } from '../modules/cars/useCases/findSpecification/FindSpecificationController'
import { UpdateSpecificationController } from '../modules/cars/useCases/updateSpecification/UpdateSpecificationController'

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
