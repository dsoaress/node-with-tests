import { CategoriesRepository } from '../../repositories/inMemory/CategoriesRepository'
import { AppError } from '../../../../shared/errors/AppError'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepository: CategoriesRepositoryInterface

describe('CreateCategoryUseCase', () => {
  const category = {
    name: 'Category 1',
    description: 'Category 1 description'
  }

  beforeEach(async () => {
    categoriesRepository = new CategoriesRepository()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

    await createCategoryUseCase.execute(category)
  })

  it('should be able to create a new category', async () => {
    const categoryExists = await categoriesRepository.findByName(category.name)
    expect(categoryExists).toBeTruthy()
  })

  it('should not be able to create a new category with the same name', async () => {
    await expect(createCategoryUseCase.execute(category)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new category with an empty name', async () => {
    const categoryWithEmptyName = {
      ...category,
      name: ''
    }

    await expect(createCategoryUseCase.execute(categoryWithEmptyName)).rejects.toBeInstanceOf(
      AppError
    )
  })

  it('should not be able to create a new category with an empty description', async () => {
    const categoryWithEmptyDescription = {
      ...category,
      description: ''
    }

    await expect(
      createCategoryUseCase.execute(categoryWithEmptyDescription)
    ).rejects.toBeInstanceOf(AppError)
  })
})
