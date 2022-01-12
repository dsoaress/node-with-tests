import { Router } from 'express'

import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController'
import { DeleteCarController } from '../../../../modules/cars/useCases/deleteCar/DeleteCarController'
import { FindAllCarsController } from '../../../../modules/cars/useCases/findAllCars/FindAllCarsController'
import { FindCarController } from '../../../../modules/cars/useCases/findCar/FindCarController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carsRouter = Router()

const createCarController = new CreateCarController()
const findAllCarsController = new FindAllCarsController()
const findCarController = new FindCarController()
const deleteCarController = new DeleteCarController()

// public routes
carsRouter.get('/', findAllCarsController.handle)
carsRouter.get('/:id', findCarController.handle)

// private routes
carsRouter.use(ensureAuthenticated, ensureAdmin)
carsRouter.post('/', createCarController.handle)
carsRouter.delete('/:id', deleteCarController.handle)

export { carsRouter }
