import { compareSync } from 'bcrypt'
import { instanceToPlain } from 'class-transformer'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { env } from '../../../../config/env'
import { AppError } from '../../../../shared/errors/AppError'
import { AuthenticateUserDTO } from '../../dto/AuthenticateUserDTO'
import { Session } from '../../models/Session'
import { SessionsRepositoryInterface } from '../../repositories/SessionsRepositoryInterface'
import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'

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

    const accessToken = sign(jwtPayload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_AT
    })

    return {
      user: instanceToPlain(user),
      accessToken,
      refreshToken: session.id
    }
  }
}
