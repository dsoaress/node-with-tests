import { inject, injectable } from 'tsyringe'

import { SpecificationsRepositoryInterface } from '@/cars/repositories/SpecificationsRepositoryInterface'

@injectable()
export class DeleteSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepositoryInterface
  ) {}

  async execute(id: string) {
    await this.specificationsRepository.delete(id)
  }
}
