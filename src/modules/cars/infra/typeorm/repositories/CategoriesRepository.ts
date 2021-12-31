import { getRepository, Repository } from 'typeorm'

import { Category } from '@/cars/models/Category'
import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'

import { CategoryEntity } from '../entities/CategoryEntity'

export class CategoriesRepository implements CategoriesRepositoryInterface {
  private repository: Repository<CategoryEntity>

  constructor() {
    this.repository = getRepository(CategoryEntity)
  }

  async create(category: Category) {
    return await this.repository.save(category)
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

  async update(id: string, category: Partial<Category>) {
    const categoryExists = await this.findById(id)

    if (!categoryExists) return undefined

    const updatedCategory = { ...categoryExists, ...category }
    await this.repository.update(id, updatedCategory)

    return updatedCategory
  }

  async delete(id: string) {
    const category = await this.findById(id)
    if (!category) return undefined
    await this.repository.remove(category)
  }
}
