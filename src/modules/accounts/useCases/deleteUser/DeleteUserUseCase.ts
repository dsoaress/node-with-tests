import { inject, injectable } from 'tsyringe'

import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute(id: string) {
    await this.usersRepository.delete(id)
  }
}
