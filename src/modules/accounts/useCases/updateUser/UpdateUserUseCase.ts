import { compareSync, hashSync } from 'bcrypt'
import { instanceToPlain } from 'class-transformer'
import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { UpdateUserDTO } from '../../dto/UpdateUserDTO'
import { User } from '../../models/User'
import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'

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
