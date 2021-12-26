import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

import { FindAllCategoriesController } from './FindAllCategoriesController'
import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
const findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoriesRepository)
const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase)

export { findAllCategoriesController }
