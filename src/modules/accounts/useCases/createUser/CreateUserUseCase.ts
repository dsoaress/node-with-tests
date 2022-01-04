import { hashSync } from 'bcrypt'
import { instanceToPlain } from 'class-transformer'
import { validate } from 'class-validator'
import { inject, injectable } from 'tsyringe'

import { CreateUserDTO } from '@/accounts/dto/CreateUserDTO'
import { User } from '@/accounts/models/User'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute(data: CreateUserDTO, admin = false) {
    const userExists = await this.usersRepository.findByEmail(data.email)
    if (userExists) throw new AppError('User already exists')

    const user = new User(data)
    const errors = await validate(user)
    if (errors.length) throw new AppError(errors)

    user.password = hashSync(user.password, 10)
    if (data.admin && !admin) throw new AppError('Only admins can create admin accounts')

    const result = await this.usersRepository.create(user)

    return instanceToPlain(result)
  }
}
