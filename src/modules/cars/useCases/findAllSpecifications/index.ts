import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { FindAllSpecificationsController } from './FindAllSpecificationsController'
import { FindAllSpecificationsUseCase } from './FindAllSpecificationsUseCase'

const specificationsRepository = SpecificationsRepository.getInstance()
const findAllSpecificationsUseCase = new FindAllSpecificationsUseCase(specificationsRepository)
const findAllSpecificationsController = new FindAllSpecificationsController(
  findAllSpecificationsUseCase
)

export { findAllSpecificationsController }
