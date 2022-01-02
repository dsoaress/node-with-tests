import { inject, injectable } from 'tsyringe'

import { CarsRepositoryInterface } from '@/cars/repositories/CarsRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class FindCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: CarsRepositoryInterface
  ) {}

  async execute(id: string) {
    const car = await this.carsRepository.findById(id)

    if (!car) {
      throw new AppError('Car not found')
    }

    return car
  }
}
