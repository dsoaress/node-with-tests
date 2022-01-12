import { instanceToPlain } from 'class-transformer'
import { inject, injectable } from 'tsyringe'

import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'

@injectable()
export class FindAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute() {
    const users = await this.usersRepository.findAll()
    return instanceToPlain(users)
  }
}
