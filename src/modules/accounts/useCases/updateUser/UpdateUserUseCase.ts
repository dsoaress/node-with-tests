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

  async execute(id: string, data: UpdateUserDTO, admin = false) {
    const user = await this.usersRepository.findById(id)
    if (!user) throw new AppError('User not found', 404)
    if (data.admin && !admin) throw new AppError('Only admins can update admin privileges')

    if (data.password) {
      if (!data.oldPassword) throw new AppError('Password cannot be updated without old password')
      const passwordMatch = compareSync(data.oldPassword, user.password)
      if (!passwordMatch) throw new AppError('Old password is incorrect')
      data.password = hashSync(data.password, 10)
      delete data.oldPassword
    }

    const updatedUser = new User({ ...user, ...data })
    const errors = await validate(updatedUser)
    if (errors.length > 0) throw new AppError(errors)

    await this.usersRepository.update(id, updatedUser)

    return instanceToPlain(updatedUser)
  }
}
