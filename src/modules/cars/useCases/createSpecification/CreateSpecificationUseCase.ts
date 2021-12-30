import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'

import type { CreateSpecificationDTO } from '../../dto/CreateSpecificationDTO'
import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute({ name, description }: CreateSpecificationDTO) {
    if (!name || !description) {
      throw new AppError('Name and description are required')
    }

    const specificationExists = await this.specificationsRepository.findByName(name)

    if (specificationExists) {
      throw new AppError('Specification already exists')
    }

    const specification = await this.specificationsRepository.create({ name, description })

    return specification
  }
}
