import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { CreateCarDTO } from '@/cars/dto/CreateCarDTO'
import { Car } from '@/cars/models/Car'
import { CarsRepositoryInterface } from '@/cars/repositories/CarsRepositoryInterface'
import { CategoriesRepositoryInterface } from '@/cars/repositories/CategoriesRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: CarsRepositoryInterface,

    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(data: CreateCarDTO) {
    const carExists = await this.carsRepository.findByName(data.name)
    if (carExists) throw new AppError('Car already exists')

    const categoryExists = await this.categoriesRepository.findById(data.categoryId)
    if (!categoryExists) throw new AppError('Category not found')

    const car = new Car({ ...data, category: categoryExists })
    const errors = await validate(car)
    if (errors.length) throw new AppError(errors)

    return await this.carsRepository.create(car)
  }
}
