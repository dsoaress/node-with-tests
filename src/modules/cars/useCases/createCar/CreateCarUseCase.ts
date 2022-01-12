import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { CreateCarDTO } from '../../dto/CreateCarDTO'
import { Car } from '../../models/Car'
import { CarsRepositoryInterface } from '../../repositories/CarsRepositoryInterface'
import { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'

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
    if (!categoryExists) throw new AppError('Category not found', 404)

    const car = new Car({ ...data, category: categoryExists })
    const errors = await validate(car)
    if (errors.length) throw new AppError(errors)

    return await this.carsRepository.create(car)
  }
}
