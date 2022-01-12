import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { CreateSpecificationDTO } from '../../dto/CreateSpecificationDTO'
import { Specification } from '../../models/Specification'
import { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute(data: CreateSpecificationDTO) {
    const specificationExists = await this.specificationsRepository.findByName(data.name)

    if (specificationExists) throw new AppError('Specification already exists')

    const specification = new Specification(data)
    const errors = await validate(specification)
    if (errors.length) throw new AppError(errors)

    return await this.specificationsRepository.create(specification)
  }
}
