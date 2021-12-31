import { instanceToPlain } from 'class-transformer'
import { inject, injectable } from 'tsyringe'

import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'

@injectable()
export class FindUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)
    return instanceToPlain(user)
  }
}
