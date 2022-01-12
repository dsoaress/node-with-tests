import { Specification } from '../../../models/Specification'
import { SpecificationsRepositoryInterface } from '../../../repositories/SpecificationsRepositoryInterface'

export class SpecificationsRepository implements SpecificationsRepositoryInterface {
  specifications: Specification[] = []

  async create(specification: Specification) {
    this.specifications.push(specification)
    return specification
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

  async update(id: string, specification: Partial<Specification>) {
    const specificationExists = await this.findById(id)

    if (!specificationExists) return undefined

    const updatedSpecification = { ...specificationExists, ...specification }

    return updatedSpecification
  }

  async delete(id: string) {
    const specification = await this.findById(id)
    if (!specification) return undefined
    this.specifications = this.specifications.filter(specification => specification.id !== id)
  }
}
