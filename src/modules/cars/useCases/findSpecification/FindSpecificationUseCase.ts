import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

export class FindSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepositoryInterface) {}

  async execute(id: string) {
    const specification = await this.specificationsRepository.findById(id)

    if (!specification) {
      throw new Error('Specification not found')
    }

    return specification
  }
}
