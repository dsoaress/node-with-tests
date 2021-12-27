import { inject, injectable } from 'tsyringe'

import { UpdateCategoryDTO } from '../../repositories/implementations/CategoriesRepository'

import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(id: string, { name, description }: UpdateCategoryDTO) {
    const category = await this.categoriesRepository.update(id, { name, description })

    if (!category) {
      throw new Error('Category not found')
    }

    return category
  }
}
