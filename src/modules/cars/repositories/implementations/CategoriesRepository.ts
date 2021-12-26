import { Category } from '../../models/Category'

import type { CategoriesRepositoryInterface } from '../CategoriesRepositoryInterface'

export type CreateCategoryDTO = {
  name: string
  description: string
}

export type UpdateCategoryDTO = Partial<CreateCategoryDTO>

export class CategoriesRepository implements CategoriesRepositoryInterface {
  private categories: Category[]
  private static instance: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  static getInstance() {
    if (!CategoriesRepository.instance) {
      CategoriesRepository.instance = new CategoriesRepository()
    }

    return CategoriesRepository.instance
  }

  async create({ name, description }: CreateCategoryDTO) {
    const newCategory = new Category()

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(newCategory)

    return newCategory
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

  async update(id: string, { name, description }: UpdateCategoryDTO) {
    const category = await this.findById(id)

    if (!category) {
      return null
    }

    Object.assign(category, {
      name: name || category.name,
      description: description || category.description
    })

    return category
  }

  async delete(id: string) {
    const category = await this.findById(id)

    if (!category) {
      return null
    }

    const index = this.categories.indexOf(category)

    this.categories.splice(index, 1)
  }
}
