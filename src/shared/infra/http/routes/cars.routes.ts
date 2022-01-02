import { Router } from 'express'

import { CreateCarController } from '@/cars/useCases/createCar/CreateCarController'
import { FindAllCarsController } from '@/cars/useCases/findAllCars/FindAllCarsController'
import { FindCarController } from '@/cars/useCases/findCar/FindCarController'

import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carsRouter = Router()

const createCarController = new CreateCarController()
const findAllCarsController = new FindAllCarsController()
const findCarController = new FindCarController()

// public routes
carsRouter.get('/', findAllCarsController.handle)
carsRouter.get('/:id', findCarController.handle)

// private routes
carsRouter.use(ensureAuthenticated, ensureAdmin)
carsRouter.post('/', createCarController.handle)

export { carsRouter }
