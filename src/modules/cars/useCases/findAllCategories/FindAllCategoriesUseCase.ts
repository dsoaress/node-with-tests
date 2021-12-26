import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

export class FindAllCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryInterface) {}

  async execute() {
    const categories = await this.categoriesRepository.findAll()
    return categories
  }
}
