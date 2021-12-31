import { inject, injectable } from 'tsyringe'

import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'

@injectable()
export class FindAllSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute() {
    const specifications = await this.specificationsRepository.findAll()
    return specifications
  }
}
