import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'

import type { UpdateCategoryDTO } from '../../dto/UpdateCategoryDTO'
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
      throw new AppError('Category not found')
    }

    return category
  }
}
