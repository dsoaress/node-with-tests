import { getRepository, Repository } from 'typeorm'

import { Specification } from '../../entities/Specification'

import type { SpecificationsRepositoryInterface } from '../SpecificationsRepositoryInterface'

export type CreateSpecificationDTO = {
  name: string
  description: string
}

export type UpdateSpecificationDTO = Partial<CreateSpecificationDTO>
export class SpecificationsRepository implements SpecificationsRepositoryInterface {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ name, description }: CreateSpecificationDTO) {
    const specification = this.repository.create({ name, description })
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
