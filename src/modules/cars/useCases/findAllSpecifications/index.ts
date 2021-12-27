import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { FindAllSpecificationsController } from './FindAllSpecificationsController'
import { FindAllSpecificationsUseCase } from './FindAllSpecificationsUseCase'

export default () => {
  const specificationsRepository = new SpecificationsRepository()
  const findAllSpecificationsUseCase = new FindAllSpecificationsUseCase(specificationsRepository)
  const findAllSpecificationsController = new FindAllSpecificationsController(
    findAllSpecificationsUseCase
  )

  return findAllSpecificationsController
}
