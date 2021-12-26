import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository'

import { UpdateSpecificationController } from './UpdateSpecificationController'
import { UpdateSpecificationUseCase } from './UpdateSpecificationUseCase'

const specificationsRepository = SpecificationsRepository.getInstance()
const updateSpecificationUseCase = new UpdateSpecificationUseCase(specificationsRepository)
const updateSpecificationController = new UpdateSpecificationController(updateSpecificationUseCase)

export { updateSpecificationController }
