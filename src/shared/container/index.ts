import { container } from 'tsyringe'

import { CategoriesRepositoryInterface } from '../../modules/cars/repositories/CategoriesRepositoryInterface'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { SpecificationsRepositoryInterface } from '../../modules/cars/repositories/SpecificationsRepositoryInterface'

container.registerSingleton<CategoriesRepositoryInterface>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<SpecificationsRepositoryInterface>(
  'SpecificationsRepository',
  SpecificationsRepository
)
