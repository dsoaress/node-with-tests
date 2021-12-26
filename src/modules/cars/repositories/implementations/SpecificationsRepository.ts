import { Specification } from '../../models/Specification'

import type { SpecificationsRepositoryInterface } from '../SpecificationsRepositoryInterface'

export type CreateSpecificationDTO = {
  name: string
  description: string
}

export type UpdateSpecificationDTO = Partial<CreateSpecificationDTO>
export class SpecificationsRepository implements SpecificationsRepositoryInterface {
  private specifications: Specification[]
  private static instance: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  static getInstance() {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository()
    }

    return SpecificationsRepository.instance
  }

  async create({ name, description }: CreateSpecificationDTO) {
    const newSpecification = new Specification()

    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(newSpecification)

    return newSpecification
  }

  async findAll() {
    return this.specifications
  }

  async findById(id: string) {
    return this.specifications.find(specification => specification.id === id)
  }

  async findByName(name: string) {
    return this.specifications.find(specification => specification.name === name)
  }

  async update(id: string, { name, description }: UpdateSpecificationDTO) {
    const specification = await this.findById(id)

    if (!specification) {
      return null
    }

    Object.assign(specification, {
      name: name || specification.name,
      description: description || specification.description
    })

    return specification
  }

  async delete(id: string) {
    const specification = await this.findById(id)

    if (!specification) {
      return null
    }

    const index = this.specifications.indexOf(specification)

    this.specifications.splice(index, 1)
  }
}
