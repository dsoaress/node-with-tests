import { CategoriesRepository } from '../../repositories/inMemory/CategoriesRepository'
import { AppError } from '../../../../shared/errors/AppError'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'
import type { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepository: CategoriesRepositoryInterface
let category: CreateCategoryDTO

describe('CreateCategoryUseCase', () => {
  beforeEach(async () => {
    categoriesRepository = new CategoriesRepository()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

    category = {
      name: 'Category 1',
      description: 'Category 1 description'
    }
  })

  it('should be able to create a new category', async () => {
    const categoryExists = await createCategoryUseCase.execute(category)
    expect(categoryExists).toBeTruthy()
  })

  it('should not be able to create a new category with the same name', async () => {
    await createCategoryUseCase.execute(category)
    await expect(createCategoryUseCase.execute(category)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new category with an empty name', async () => {
    const categoryWithEmptyName = { ...category, name: '' }
    await expect(createCategoryUseCase.execute(categoryWithEmptyName)).rejects.toBeInstanceOf(
      AppError
    )
  })

  it('should not be able to create a new category with an empty description', async () => {
    const categoryWithEmptyDescription = { ...category, description: '' }
    await expect(
      createCategoryUseCase.execute(categoryWithEmptyDescription)
    ).rejects.toBeInstanceOf(AppError)
  })
})
