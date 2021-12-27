import { inject, injectable } from 'tsyringe'

import type { CreateSpecificationDTO } from '../../repositories/implementations/SpecificationsRepository'
import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute({ name, description }: CreateSpecificationDTO) {
    if (!name || !description) {
      throw new Error('Name and description are required')
    }

    const specificationExists = await this.specificationsRepository.findByName(name)

    if (specificationExists) {
      throw new Error('Specification already exists')
    }

    const specification = await this.specificationsRepository.create({ name, description })

    return specification
  }
}
