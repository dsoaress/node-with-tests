import { Router } from 'express'

import {
  createCategoryController,
  deleteCategoryController,
  findAllCategoriesController,
  findCategoryController,
  updateCategoryController
} from '../modules/cars/useCases'

const categoriesRouter = Router()

categoriesRouter.post('/', (req, res) => createCategoryController.handle(req, res))
categoriesRouter.get('/', (req, res) => findAllCategoriesController.handle(req, res))
categoriesRouter.get('/:id', (req, res) => findCategoryController.handle(req, res))
categoriesRouter.put('/:id', (req, res) => updateCategoryController.handle(req, res))
categoriesRouter.delete('/:id', (req, res) => deleteCategoryController.handle(req, res))

export { categoriesRouter }
