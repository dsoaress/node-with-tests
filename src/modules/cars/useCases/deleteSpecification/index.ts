import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { DeleteSpecificationController } from './DeleteSpecificationController'
import { DeleteSpecificationUseCase } from './DeleteSpecificationUseCase'

const specificationsRepository = SpecificationsRepository.getInstance()
const deleteSpecificationUseCase = new DeleteSpecificationUseCase(specificationsRepository)
const deleteSpecificationController = new DeleteSpecificationController(deleteSpecificationUseCase)

export { deleteSpecificationController }
