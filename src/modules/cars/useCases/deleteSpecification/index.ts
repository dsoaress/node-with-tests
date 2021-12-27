import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { DeleteSpecificationController } from './DeleteSpecificationController'
import { DeleteSpecificationUseCase } from './DeleteSpecificationUseCase'

export default () => {
  const specificationsRepository = new SpecificationsRepository()
  const deleteSpecificationUseCase = new DeleteSpecificationUseCase(specificationsRepository)
  const deleteSpecificationController = new DeleteSpecificationController(
    deleteSpecificationUseCase
  )

  return deleteSpecificationController
}
