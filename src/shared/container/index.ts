import { container } from 'tsyringe'

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { UsersRepositoryInterface } from '../../modules/accounts/repositories/UsersRepositoryInterface'
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

container.registerSingleton<UsersRepositoryInterface>('UsersRepository', UsersRepository)
