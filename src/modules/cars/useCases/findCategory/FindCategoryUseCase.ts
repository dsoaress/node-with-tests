import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

export class FindCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryInterface) {}

  async execute(id: string) {
    const category = await this.categoriesRepository.findById(id)

    if (!category) {
      throw new Error('Category not found')
    }

    return category
  }
}
