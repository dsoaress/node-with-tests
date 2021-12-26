import { UpdateCategoryDTO } from '../../repositories/implementations/CategoriesRepository'

import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryInterface) {}

  async execute(id: string, { name, description }: UpdateCategoryDTO) {
    const category = await this.categoriesRepository.update(id, { name, description })

    if (!category) {
      throw new Error('Category not found')
    }

    return category
  }
}
