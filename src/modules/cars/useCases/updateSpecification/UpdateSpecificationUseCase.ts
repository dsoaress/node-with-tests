import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { UpdateSpecificationDTO } from '../../dto/UpdateSpecificationDTO'
import { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

@injectable()
export class UpdateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute(id: string, { name, description }: UpdateSpecificationDTO) {
    const specification = await this.specificationsRepository.update(id, { name, description })

    if (!specification) {
      throw new AppError('Specification not found', 404)
    }

    return specification
  }
}
