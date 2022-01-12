import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'
import { Category } from '../../models/Category'
import { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

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
