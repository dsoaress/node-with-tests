import type { SpecificationsRepositoryInterface } from '../../repositories/SpecificationsRepositoryInterface'

export class FindAllSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepositoryInterface) {}

  async execute() {
    const specifications = await this.specificationsRepository.findAll()
    return specifications
  }
}
