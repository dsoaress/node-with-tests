import { inject, injectable } from 'tsyringe'

import { UpdateSpecificationDTO } from '../../repositories/implementations/SpecificationsRepository'

import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

@injectable()
export class UpdateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute(id: string, { name, description }: UpdateSpecificationDTO) {
    const specification = await this.specificationsRepository.update(id, { name, description })

    if (!specification) {
      throw new Error('Specification not found')
    }

    return specification
  }
}
