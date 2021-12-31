import { getRepository, Repository } from 'typeorm'

import { env } from '../../../../config/env'
import { AppError } from '../../../../shared/errors/AppError'
import { Session } from '../../entities/Session'

import type { User } from '../../entities/User'
import type { SessionsRepositoryInterface } from '../SessionsRepositoryInterface'

export class SessionsRepository implements SessionsRepositoryInterface {
  private repository: Repository<Session>

  constructor() {
    this.repository = getRepository(Session)
  }

  async createSession(user: User) {
    const session = this.repository.create({
      user,
      expiresAt: new Date(Date.now() + +env.REFRESH_TOKEN_EXPIRES_AT)
    })

    await this.repository.save(session)

    return session
  }

  async findSession(id: string) {
    const session = await this.repository.findOne(id, {
      relations: ['user']
    })

    if (!session) {
      throw new AppError('Session not found', 404)
    }

    return session
  }

  async deleteSession(id: string) {
    const session = await this.repository.findOne(id)

    if (!session) {
      return null
    }

    await this.repository.remove(session)
  }
}
