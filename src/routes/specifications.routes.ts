import { Router } from 'express'

import {
  createSpecificationController,
  deleteSpecificationController,
  findAllSpecificationsController,
  findSpecificationController,
  updateSpecificationController
} from '../modules/cars/useCases'

const specificationsRouter = Router()

specificationsRouter.post('/', (req, res) => createSpecificationController.handle(req, res))
specificationsRouter.get('/', (req, res) => findAllSpecificationsController.handle(req, res))
specificationsRouter.get('/:id', (req, res) => findSpecificationController.handle(req, res))
specificationsRouter.put('/:id', (req, res) => updateSpecificationController.handle(req, res))
specificationsRouter.delete('/:id', (req, res) => deleteSpecificationController.handle(req, res))

export { specificationsRouter }
