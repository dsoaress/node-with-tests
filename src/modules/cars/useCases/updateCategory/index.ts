import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
const updateCategoryUseCase = new UpdateCategoryUseCase(categoriesRepository)
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export { updateCategoryController }
