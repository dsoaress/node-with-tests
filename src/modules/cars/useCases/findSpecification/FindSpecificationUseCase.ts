import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'

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
      throw new AppError('Specification not found')
    }

    return specification
  }
}
