import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

export default () => {
  const categoriesRepository = new CategoriesRepository()
  const updateCategoryUseCase = new UpdateCategoryUseCase(categoriesRepository)
  const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

  return updateCategoryController
}
