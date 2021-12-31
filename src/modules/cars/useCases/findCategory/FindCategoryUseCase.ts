import { inject, injectable } from 'tsyringe'

import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(id: string) {
    const category = await this.categoriesRepository.findById(id)

    if (!category) {
      throw new AppError('Category not found')
    }

    return category
  }
}
