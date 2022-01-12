import { instanceToPlain } from 'class-transformer'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'
import { deleteFile } from '../../../../utils/file'
import { User } from '../../models/User'
import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface
  ) {}

  async execute(userId: string, avatarFilename?: string) {
    if (!avatarFilename) {
      throw new AppError('You must provide an avatar filename')
    }

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    if (user.avatar) {
      await deleteFile(user.avatar)
    }

    const updatedUser = await this.usersRepository.update(userId, {
      ...user,
      avatar: avatarFilename
    })

    return instanceToPlain(updatedUser)
  }
}
