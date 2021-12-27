import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

import { FindCategoryController } from './FindCategoryController'
import { FindCategoryUseCase } from './FindCategoryUseCase'

export default () => {
  const categoriesRepository = new CategoriesRepository()
  const findCategoryUseCase = new FindCategoryUseCase(categoriesRepository)
  const findCategoryController = new FindCategoryController(findCategoryUseCase)

  return findCategoryController
}
