import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { FindSpecificationController } from './FindSpecificationController'
import { FindSpecificationUseCase } from './FindSpecificationUseCase'

export default () => {
  const specificationsRepository = new SpecificationsRepository()
  const findSpecificationUseCase = new FindSpecificationUseCase(specificationsRepository)
  const findSpecificationController = new FindSpecificationController(findSpecificationUseCase)

  return findSpecificationController
}
