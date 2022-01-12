import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { CarsRepositoryInterface } from '../../repositories/CarsRepositoryInterface'

@injectable()
export class FindCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: CarsRepositoryInterface
  ) {}

  async execute(id: string) {
    const car = await this.carsRepository.findById(id)

    if (!car) {
      throw new AppError('Car not found', 404)
    }

    return car
  }
}
