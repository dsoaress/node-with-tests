import { inject, injectable } from 'tsyringe'

import { CarsRepositoryInterface } from '@/cars/repositories/CarsRepositoryInterface'

@injectable()
export class DeleteCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: CarsRepositoryInterface
  ) {}

  async execute(id: string) {
    await this.carsRepository.delete(id)
  }
}
