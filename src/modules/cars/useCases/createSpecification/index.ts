import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { CreateSpecificationController } from './CreateSpecificationController'

export default () => {
  const specificationsRepository = new SpecificationsRepository()
  const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
  )

  return createSpecificationController
}
