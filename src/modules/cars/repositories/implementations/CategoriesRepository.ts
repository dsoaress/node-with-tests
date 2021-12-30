import { getRepository, Repository } from 'typeorm'
import { validate } from 'class-validator'

import { Category } from '../../entities/Category'
import { AppError } from '../../../../shared/errors/AppError'

import type { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'
import type { UpdateCategoryDTO } from '../../dto/UpdateCategoryDTO'
import type { CategoriesRepositoryInterface } from '../CategoriesRepositoryInterface'

export class CategoriesRepository implements CategoriesRepositoryInterface {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: CreateCategoryDTO) {
    const category = this.repository.create({ name, description })
    const errors = await validate(category)

    if (errors.length) {
      throw new AppError(errors)
    }

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
