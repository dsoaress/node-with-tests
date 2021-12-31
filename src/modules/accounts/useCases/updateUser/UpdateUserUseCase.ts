import { instanceToPlain } from 'class-transformer'
import { inject, injectable } from 'tsyringe'

import { UpdateUserDTO } from '@/accounts/dto/UpdateUserDTO'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute(id: string, data: UpdateUserDTO) {
    const user = await this.usersRepository.update(id, data)

    if (!user) {
      throw new Error('User not found')
    }

    return instanceToPlain(user)
  }
}
