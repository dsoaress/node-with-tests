import { Category } from '../../entities/Category'

import type { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'
import type { CategoriesRepositoryInterface } from '../CategoriesRepositoryInterface'
import type { UpdateCategoryDTO } from '../../dto/UpdateCategoryDTO'

export class CategoriesRepository implements CategoriesRepositoryInterface {
  categories: Category[] = []

  async create({ name, description }: CreateCategoryDTO) {
    const category = new Category()
    Object.assign(category, { name, description })
    this.categories.push(category)
    return category
  }

  async findAll() {
    return this.categories
  }

  async findById(id: string) {
    return this.categories.find(category => category.id === id)
  }

  async findByName(name: string) {
    return this.categories.find(category => category.name === name)
  }

  async update(id: string, data: UpdateCategoryDTO) {
    const category = await this.findById(id)

    if (!category) {
      return null
    }

    const updatedCategory = { ...category, ...data }

    return updatedCategory
  }

  async delete(id: string) {
    const category = await this.findById(id)

    if (!category) {
      return null
    }

    this.categories = this.categories.filter(category => category.id !== id)
  }
}
