import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { CreateCategoryDTO } from '@/cars/dto/CreateCategoryDTO'
import { Category } from '@/cars/models/Category'
import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(data: CreateCategoryDTO) {
    const categoryExists = await this.categoriesRepository.findByName(data.name)
    if (categoryExists) throw new AppError('Category already exists')

    const category = new Category(data)
    const errors = await validate(category)
    if (errors.length) throw new AppError(errors)

    return await this.categoriesRepository.create(category)
  }
}
