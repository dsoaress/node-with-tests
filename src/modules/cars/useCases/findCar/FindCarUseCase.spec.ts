import 'reflect-metadata'

import { AppError } from '../../../../shared/errors/AppError'
import { CreateCarDTO } from '../../dto/CreateCarDTO'
import { CreateCategoryDTO } from '../../dto/CreateCategoryDTO'
import { CarsRepository } from '../../infra/inMemory/repositories/CarsRepository'
import { CategoriesRepository } from '../../infra/inMemory/repositories/CategoriesRepository'
import { CarsRepositoryInterface } from '../../repositories/CarsRepositoryInterface'
import { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'
import { CreateCarUseCase } from '../createCar/CreateCarUseCase'
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase'
import { FindCarUseCase } from './FindCarUseCase'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepository: CategoriesRepositoryInterface
let createCarUseCase: CreateCarUseCase
let findCarUseCase: FindCarUseCase
let carsRepository: CarsRepositoryInterface
let category: CreateCategoryDTO
let car: CreateCarDTO

describe('FindAllCarsUseCase', () => {
  beforeEach(async () => {
    categoriesRepository = new CategoriesRepository()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
    carsRepository = new CarsRepository()
    createCarUseCase = new CreateCarUseCase(carsRepository, categoriesRepository)
    findCarUseCase = new FindCarUseCase(carsRepository)

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

  it('should be able to find a car by id', async () => {
    const newCar = await createCarUseCase.execute(car)
    const result = await findCarUseCase.execute(newCar.id)
    expect(result.id).toBe(newCar.id)
  })

  it('should not be able to find a invalid car', async () => {
    await expect(findCarUseCase.execute('invalid-id')).rejects.toBeInstanceOf(AppError)
  })
})
