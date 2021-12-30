import { container } from 'tsyringe'

import { SessionsRepository } from '../../modules/accounts/repositories/implementations/SessionsRepository'
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'

import type { SessionsRepositoryInterface } from '../../modules/accounts/repositories/SessionsRepositoryInterface'
import type { UsersRepositoryInterface } from '../../modules/accounts/repositories/UsersRepositoryInterface'
import type { CategoriesRepositoryInterface } from '../../modules/cars/repositories/CategoriesRepositoryInterface'
import type { SpecificationsRepositoryInterface } from '../../modules/cars/repositories/SpecificationsRepositoryInterface'

container.registerSingleton<CategoriesRepositoryInterface>(
  'CategoriesRepository',
  CategoriesRepository
)

container.registerSingleton<SpecificationsRepositoryInterface>(
  'SpecificationsRepository',
  SpecificationsRepository
)

container.registerSingleton<UsersRepositoryInterface>('UsersRepository', UsersRepository)

container.registerSingleton<SessionsRepositoryInterface>('SessionsRepository', SessionsRepository)
