import { inject, injectable } from 'tsyringe'

import { UpdateCategoryDTO } from '@/cars/dto/UpdateCategoryDTO'
import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

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
