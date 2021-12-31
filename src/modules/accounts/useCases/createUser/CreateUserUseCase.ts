import { instanceToPlain } from 'class-transformer'
import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { User } from '../../entities/User'

import type { CreateUserDTO } from '../../dto/CreateUserDTO'
import type { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute(data: CreateUserDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (userExists) {
      throw new AppError('User already exists')
    }

    const validateUser = new User()
    Object.assign(validateUser, data)

    const errors = await validate(validateUser)

    if (errors.length) {
      throw new AppError(errors)
    }

    const user = await this.usersRepository.create(data)

    return instanceToPlain(user)
  }
}
