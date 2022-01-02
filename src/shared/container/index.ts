import { container } from 'tsyringe'

import { SessionsRepository } from '@/accounts/infra/typeorm/repositories/SessionsRepository'
import { UsersRepository } from '@/accounts/infra/typeorm/repositories/UsersRepository'
import { SessionsRepositoryInterface } from '@/accounts/repositories/SessionsRepositoryInterface'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'
import { CarsRepository } from '@/cars/infra/typeorm/repositories/CarsRepository'
import { CategoriesRepository } from '@/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '@/cars/infra/typeorm/repositories/SpecificationsRepository'
import { CarsRepositoryInterface } from '@/cars/repositories/CarsRepositoryInterface'
import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'
import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'

container.registerSingleton<CarsRepositoryInterface>('CarsRepository', CarsRepository)

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
