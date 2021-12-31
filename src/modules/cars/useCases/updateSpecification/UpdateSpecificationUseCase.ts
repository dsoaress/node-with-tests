import { inject, injectable } from 'tsyringe'

import { UpdateSpecificationDTO } from '@/cars/dto/UpdateSpecificationDTO'
import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class UpdateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute(id: string, { name, description }: UpdateSpecificationDTO) {
    const specification = await this.specificationsRepository.update(id, { name, description })

    if (!specification) {
      throw new AppError('Specification not found')
    }

    return specification
  }
}
