import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'

import type { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'
import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute({ name, description }: CreateCategoryDTO) {
    if (!name || !description) {
      throw new AppError('Name and description are required')
    }

    const categoryExists = await this.categoriesRepository.findByName(name)

    if (categoryExists) {
      throw new AppError('Category already exists')
    }

    const category = await this.categoriesRepository.create({ name, description })

    return category
  }
}
