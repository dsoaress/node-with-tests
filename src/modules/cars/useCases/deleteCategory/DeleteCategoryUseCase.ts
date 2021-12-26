import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

export class DeleteCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryInterface) {}

  async execute(id: string) {
    await this.categoriesRepository.delete(id)
  }
}
