import { Router } from 'express'

import { upload } from '../../../../config/upload'
import { CreateCategoryController } from '../../../../modules/cars/useCases/createCategory/CreateCategoryController'
import { DeleteCategoryController } from '../../../../modules/cars/useCases/deleteCategory/DeleteCategoryController'
import { FindAllCategoriesController } from '../../../../modules/cars/useCases/findAllCategories/FindAllCategoriesController'
import { FindCategoryController } from '../../../../modules/cars/useCases/findCategory/FindCategoryController'
import { ImportCategoriesController } from '../../../../modules/cars/useCases/importCategories/ImportCategoriesController'
import { UpdateCategoryController } from '../../../../modules/cars/useCases/updateCategory/UpdateCategoryController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const categoriesRouter = Router()

const createCategoryController = new CreateCategoryController()
const importCategoriesController = new ImportCategoriesController()
const findAllCategoriesController = new FindAllCategoriesController()
const findCategoryController = new FindCategoryController()
const updateCategoryController = new UpdateCategoryController()
const deleteCategoryController = new DeleteCategoryController()

// public routes
categoriesRouter.get('/', findAllCategoriesController.handle)
categoriesRouter.get('/:id', findCategoryController.handle)

// private routes
categoriesRouter.use(ensureAuthenticated, ensureAdmin)
categoriesRouter.post('/', createCategoryController.handle)
categoriesRouter.post('/import', upload, importCategoriesController.handle)
categoriesRouter.put('/:id', updateCategoryController.handle)
categoriesRouter.delete('/:id', deleteCategoryController.handle)

export { categoriesRouter }
