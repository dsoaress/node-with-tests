import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { DeleteCategoryController } from '../modules/cars/useCases/deleteCategory/DeleteCategoryController'
import { FindAllCategoriesController } from '../modules/cars/useCases/findAllCategories/FindAllCategoriesController'
import { FindCategoryController } from '../modules/cars/useCases/findCategory/FindCategoryController'
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController'
import { UpdateCategoryController } from '../modules/cars/useCases/updateCategory/UpdateCategoryController'

const categoriesRouter = Router()
const multerMiddleware = multer({ dest: 'tmp/' })
const upload = multerMiddleware.single('file')

const createCategoryController = new CreateCategoryController()
const importCategoriesController = new ImportCategoriesController()
const findAllCategoriesController = new FindAllCategoriesController()
const findCategoryController = new FindCategoryController()
const updateCategoryController = new UpdateCategoryController()
const deleteCategoryController = new DeleteCategoryController()

categoriesRouter.post('/', createCategoryController.handle)
categoriesRouter.post('/import', upload, importCategoriesController.handle)
categoriesRouter.get('/', findAllCategoriesController.handle)
categoriesRouter.get('/:id', findCategoryController.handle)
categoriesRouter.put('/:id', updateCategoryController.handle)
categoriesRouter.delete('/:id', deleteCategoryController.handle)

export { categoriesRouter }
