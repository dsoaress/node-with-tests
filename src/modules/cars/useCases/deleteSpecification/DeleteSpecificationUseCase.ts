import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

export class DeleteSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepositoryInterface) {}

  async execute(id: string) {
    await this.specificationsRepository.delete(id)
  }
}
