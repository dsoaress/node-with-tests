import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { UpdateSpecificationController } from './UpdateSpecificationController'
import { UpdateSpecificationUseCase } from './UpdateSpecificationUseCase'

export default () => {
  const specificationsRepository = new SpecificationsRepository()
  const updateSpecificationUseCase = new UpdateSpecificationUseCase(specificationsRepository)
  const updateSpecificationController = new UpdateSpecificationController(
    updateSpecificationUseCase
  )

  return updateSpecificationController
}
