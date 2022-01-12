import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(id: string) {
    const category = await this.categoriesRepository.findById(id)

    if (!category) {
      throw new AppError('Category not found', 404)
    }

    return category
  }
}
