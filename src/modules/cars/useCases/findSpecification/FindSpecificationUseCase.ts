import { inject, injectable } from 'tsyringe'

import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

@injectable()
export class FindSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute(id: string) {
    const specification = await this.specificationsRepository.findById(id)

    if (!specification) {
      throw new Error('Specification not found')
    }

    return specification
  }
}
