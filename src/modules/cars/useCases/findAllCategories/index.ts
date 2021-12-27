import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

import { FindAllCategoriesController } from './FindAllCategoriesController'
import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'

export default () => {
  const categoriesRepository = new CategoriesRepository()
  const findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoriesRepository)
  const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase)

  return findAllCategoriesController
}
