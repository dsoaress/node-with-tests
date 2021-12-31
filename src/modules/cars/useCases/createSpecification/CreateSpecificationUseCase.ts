import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { CreateSpecificationDTO } from '@/cars/dto/CreateSpecificationDTO'
import { Specification } from '@/cars/models/Specification'
import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

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
