import { container } from 'tsyringe'

import { SessionsRepository } from '../../modules/accounts/infra/typeorm/repositories/SessionsRepository'
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/CarsRepository'
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationsRepository'

container.registerSingleton('CarsRepository', CarsRepository)
container.registerSingleton('CategoriesRepository', CategoriesRepository)
container.registerSingleton('SpecificationsRepository', SpecificationsRepository)
container.registerSingleton('UsersRepository', UsersRepository)
container.registerSingleton('SessionsRepository', SessionsRepository)
