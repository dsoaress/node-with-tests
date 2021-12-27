import { inject, injectable } from 'tsyringe'

import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(id: string) {
    const category = await this.categoriesRepository.findById(id)

    if (!category) {
      throw new Error('Category not found')
    }

    return category
  }
}
