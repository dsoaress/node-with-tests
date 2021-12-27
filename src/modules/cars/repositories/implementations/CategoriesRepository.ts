import { getRepository, Repository } from 'typeorm'

import { Category } from '../../entities/Category'

import type { CategoriesRepositoryInterface } from '../CategoriesRepositoryInterface'

export type CreateCategoryDTO = {
  name: string
  description: string
}

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>

export class CategoriesRepository implements CategoriesRepositoryInterface {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: CreateCategoryDTO) {
    const category = this.repository.create({ name, description })
    await this.repository.save(category)
    return category
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

  async update(id: string, data: UpdateCategoryDTO) {
    const category = await this.findById(id)

    if (!category) {
      return null
    }

    const updatedCategory = { ...category, ...data }
    await this.repository.save(updatedCategory)
    return updatedCategory
  }

  async delete(id: string) {
    const category = await this.findById(id)

    if (!category) {
      return null
    }

    await this.repository.remove(category)
  }
}
