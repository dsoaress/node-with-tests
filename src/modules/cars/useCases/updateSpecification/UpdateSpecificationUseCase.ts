import { UpdateSpecificationDTO } from '../../repositories/implementations/SpecificationsRepository'

import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

export class UpdateSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepositoryInterface) {}

  async execute(id: string, { name, description }: UpdateSpecificationDTO) {
    const specification = await this.specificationsRepository.update(id, { name, description })

    if (!specification) {
      throw new Error('Specification not found')
    }

    return specification
  }
}
