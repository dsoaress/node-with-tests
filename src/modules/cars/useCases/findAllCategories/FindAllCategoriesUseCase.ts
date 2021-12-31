import { inject, injectable } from 'tsyringe'

import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'

@injectable()
export class FindAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute() {
    const categories = await this.categoriesRepository.findAll()
    return categories
  }
}
