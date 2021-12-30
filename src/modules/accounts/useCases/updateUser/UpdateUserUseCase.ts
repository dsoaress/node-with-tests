import { inject, injectable } from 'tsyringe'
import { instanceToPlain } from 'class-transformer'

import type { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'
import type { UpdateUserDTO } from '../../dto/UpdateUserDTO'

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
