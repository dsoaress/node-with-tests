import { Router } from 'express'
import multer from 'multer'

import createCategoryController from '../modules/cars/useCases/createCategory'
import deleteCategoryController from '../modules/cars/useCases/deleteCategory'
import findAllCategoriesController from '../modules/cars/useCases/findAllCategories'
import findCategoryController from '../modules/cars/useCases/findCategory'
import importCategoriesController from '../modules/cars/useCases/importCategories'
import updateCategoryController from '../modules/cars/useCases/updateCategory'

const categoriesRouter = Router()
const multerMiddleware = multer({ dest: 'tmp/' })
const upload = multerMiddleware.single('file')

categoriesRouter.post('/', (req, res) => createCategoryController().handle(req, res))
categoriesRouter.post('/import', upload, (req, res) =>
  importCategoriesController().handle(req, res)
)
categoriesRouter.get('/', (req, res) => findAllCategoriesController().handle(req, res))
categoriesRouter.get('/:id', (req, res) => findCategoryController().handle(req, res))
categoriesRouter.put('/:id', (req, res) => updateCategoryController().handle(req, res))
categoriesRouter.delete('/:id', (req, res) => deleteCategoryController().handle(req, res))

export { categoriesRouter }
