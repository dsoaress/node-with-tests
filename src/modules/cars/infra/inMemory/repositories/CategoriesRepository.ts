import { Category } from '@/cars/models/Category'
import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'

export class CategoriesRepository implements CategoriesRepositoryInterface {
  categories: Category[] = []

  async create(category: Category) {
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

  async update(id: string, category: Partial<Category>) {
    const categoryExists = await this.findById(id)

    if (!categoryExists) return undefined

    const updatedCategory = { ...categoryExists, ...category }

    return updatedCategory
  }

  async delete(id: string) {
    const category = await this.findById(id)
    if (!category) return undefined
    this.categories = this.categories.filter(category => category.id !== id)
  }
}
