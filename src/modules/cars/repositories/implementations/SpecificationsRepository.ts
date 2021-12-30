import { getRepository, Repository } from 'typeorm'
import { validate } from 'class-validator'

import { Specification } from '../../entities/Specification'
import { AppError } from '../../../../shared/errors/AppError'

import type { CreateSpecificationDTO } from '../../dto/CreateSpecificationDTO'
import type { UpdateSpecificationDTO } from '../../dto/UpdateSpecificationDTO'
import type { SpecificationsRepositoryInterface } from '../SpecificationsRepositoryInterface'

export class SpecificationsRepository implements SpecificationsRepositoryInterface {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: CreateSpecificationDTO) {
    const specification = this.repository.create({ name, description })
    const errors = await validate(specification)

    if (errors.length) {
      throw new AppError(errors)
    }

    await this.repository.save(specification)
    return specification
  }

  async findAll() {
    return await this.repository.find()
  }

  async findById(id: string) {
    return await this.repository.findOne(id)
  }

  async findByName(name: string) {
    return await this.repository.findOne({ name })
  }

  async update(id: string, data: UpdateSpecificationDTO) {
    const specification = await this.findById(id)

    if (!specification) {
      return null
    }

    const updatedSpecification = { ...specification, ...data }
    await this.repository.save(updatedSpecification)
    return updatedSpecification
  }

  async delete(id: string) {
    const specification = await this.findById(id)

    if (!specification) {
      return null
    }

    await this.repository.remove(specification)
  }
}
