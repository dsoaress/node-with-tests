import { instanceToPlain } from 'class-transformer'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { Session } from '@/accounts/models/Session'
import { SessionsRepositoryInterface } from '@/accounts/repositories/SessionsRepositoryInterface'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'
import { env } from '@/config/env'
import { AppError } from '@/shared/errors/AppError'

@injectable()
export class RefreshTokenUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositoryInterface,

    @inject('SessionsRepository')
    private sessionsRepository: SessionsRepositoryInterface
  ) {}

  async execute(userId: string, refreshToken: string) {
    if (!refreshToken) {
      throw new AppError('Missing refresh token', 401)
    }

    const sessionExists = await this.sessionsRepository.findSession(refreshToken)

    if (!sessionExists) {
      throw new AppError('Invalid credentials', 401)
    }

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new AppError('Invalid credentials', 401)
    }

    if (sessionExists.user.id !== user.id) {
      throw new AppError('Invalid credentials', 401)
    }

    const isExpired = sessionExists.expiresAt.getTime() > Date.now()
    await this.sessionsRepository.deleteSession(refreshToken)

    if (isExpired) {
      throw new AppError('Session expired', 401)
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
