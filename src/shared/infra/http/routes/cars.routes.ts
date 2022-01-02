import { Router } from 'express'

import { CreateCarController } from '@/cars/useCases/createCar/CreateCarController'

import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carsRouter = Router()

const createCarController = new CreateCarController()

// public routes

// private routes
carsRouter.use(ensureAuthenticated, ensureAdmin)
carsRouter.post('/', createCarController.handle)

export { carsRouter }
