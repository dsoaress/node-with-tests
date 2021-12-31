import { getRepository, Repository } from 'typeorm'

import { Specification } from '@/cars/models/Specification'
import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'

import { SpecificationEntity } from '../entities/SpecificationEntity'

export class SpecificationsRepository implements SpecificationsRepositoryInterface {
  private repository: Repository<SpecificationEntity>

  constructor() {
    this.repository = getRepository(SpecificationEntity)
  }

  async create(specification: Specification) {
    return await this.repository.save(specification)
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

  async update(id: string, specification: Partial<Specification>) {
    const specificationExists = await this.findById(id)

    if (!specificationExists) return undefined

    const updatedSpecification = { ...specificationExists, ...specification }
    await this.repository.save(updatedSpecification)

    return updatedSpecification
  }

  async delete(id: string) {
    const specification = await this.findById(id)
    if (!specification) return undefined
    await this.repository.remove(specification)
  }
}
