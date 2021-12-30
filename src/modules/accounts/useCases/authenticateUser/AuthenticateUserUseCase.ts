import { instanceToPlain } from 'class-transformer'
import { inject, injectable } from 'tsyringe'
import { compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { AppError } from '../../../../shared/errors/AppError'
import { env } from '../../../../config/env'

import type { AuthenticateUserDTO } from '../../dto/AuthenticateUserDTO'
import type { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'
import type { SessionsRepositoryInterface } from '../../repositories/SessionsRepositoryInterface'

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface,

    @inject('SessionsRepository')
    private sessionsRepository: SessionsRepositoryInterface
  ) {}

  async execute({ email, password }: AuthenticateUserDTO) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Invalid credentials', 401)
    }

    if (!compareSync(password, user.password)) {
      throw new AppError('Invalid credentials', 401)
    }

    const session = await this.sessionsRepository.create(user)

    const jwtPayload = {
      sub: user.id,
      admin: user.admin
    }

    const token = sign(jwtPayload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_AT
    })

    return {
      ...instanceToPlain(user),
      token,
      refresh_token: session.id
    }
  }
}
