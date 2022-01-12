import 'reflect-metadata'

import { AppError } from '../../../../shared/errors/AppError'
import { CreateCarDTO } from '../../dto/CreateCarDTO'
import { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'
import { CarsRepository } from '../../infra/inMemory/repositories/CarsRepository'
import { CategoriesRepository } from '../../infra/inMemory/repositories/CategoriesRepository'
import { CarsRepositoryInterface } from '../../repositories/CarsRepositoryInterface'
import { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase'
import { CreateCarUseCase } from './CreateCarUseCase'

let createCategoryUseCase: CreateCategoryUseCase
let createCarUseCase: CreateCarUseCase
let categoriesRepository: CategoriesRepositoryInterface
let carsRepository: CarsRepositoryInterface
let category: CreateCategoryDTO
let car: CreateCarDTO

describe('CreateCarUseCase', () => {
  beforeEach(async () => {
    categoriesRepository = new CategoriesRepository()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
    carsRepository = new CarsRepository()
    createCarUseCase = new CreateCarUseCase(carsRepository, categoriesRepository)

    category = {
      name: 'Category 1',
      description: 'Category 1 description'
    }

    const categoryCreated = await createCategoryUseCase.execute(category)

    car = {
      name: 'Car 1',
      description: 'Car 1 description',
      dailyPrice: 100,
      licensePlate: 'ABC-1234',
      fineAmount: 60,
      brand: 'Car brand',
      categoryId: categoryCreated.id
    }
  })

  it('should be able to create a new car', async () => {
    const newCar = await createCarUseCase.execute(car)
    expect(newCar).toHaveProperty('id')
  })

  it('should not be able to create a new car with the same name', async () => {
    await createCarUseCase.execute(car)
    await expect(createCarUseCase.execute(car)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new car with a invalid name', async () => {
    car.name = ''
    await expect(createCarUseCase.execute(car)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new car with a invalid description', async () => {
    car.description = ''
    await expect(createCarUseCase.execute(car)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new car with a invalid license plate', async () => {
    car.licensePlate = ''
    await expect(createCarUseCase.execute(car)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new car with a invalid brand', async () => {
    car.brand = ''
    await expect(createCarUseCase.execute(car)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new car with a invalid category', async () => {
    car.categoryId = '123456'
    await expect(createCarUseCase.execute(car)).rejects.toBeInstanceOf(AppError)
  })
})
