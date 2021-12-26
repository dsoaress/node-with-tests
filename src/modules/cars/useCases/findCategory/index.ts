import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

import { FindCategoryController } from './FindCategoryController'
import { FindCategoryUseCase } from './FindCategoryUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
const findCategoryUseCase = new FindCategoryUseCase(categoriesRepository)
const findCategoryController = new FindCategoryController(findCategoryUseCase)

export { findCategoryController }
