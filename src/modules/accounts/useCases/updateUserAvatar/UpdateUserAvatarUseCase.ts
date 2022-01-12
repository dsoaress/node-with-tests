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

  async execute(id: string, avatar?: string) {
    if (!avatar) throw new AppError('You must provide an avatar filename')

    const user = await this.usersRepository.findById(id)
    if (!user) throw new AppError('User not found', 404)
    if (user.avatar) await deleteFile(user.avatar)

    const updatedUser = new User({ ...user, avatar })
    await this.usersRepository.update(id, updatedUser)

    return instanceToPlain(updatedUser)
  }
}
