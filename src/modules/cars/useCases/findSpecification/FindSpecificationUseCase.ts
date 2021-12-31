import { inject, injectable } from 'tsyringe'

import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

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
