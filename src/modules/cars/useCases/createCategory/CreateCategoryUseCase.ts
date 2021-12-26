import type { CreateCategoryDTO } from '../../repositories/implementations/CategoriesRepository'
import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepositoryInterface) {}

  async execute({ name, description }: CreateCategoryDTO) {
    if (!name || !description) {
      throw new Error('Name and description are required')
    }

    const categoryExists = await this.categoriesRepository.findByName(name)

    if (categoryExists) {
      throw new Error('Category already exists')
    }

    const category = await this.categoriesRepository.create({ name, description })

    return category
  }
}
