import { compareSync } from 'bcrypt'
import { instanceToPlain } from 'class-transformer'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { AuthenticateUserDTO } from '@/accounts/dto/AuthenticateUserDTO'
import { Session } from '@/accounts/models/Session'
import { SessionsRepositoryInterface } from '@/accounts/repositories/SessionsRepositoryInterface'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'
import { env } from '@/config/env'
import { AppError } from '@/shared/errors/AppError'

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

    const session = new Session(user)
    await this.sessionsRepository.createSession(session)

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
      refreshToken: session.id
    }
  }
}
