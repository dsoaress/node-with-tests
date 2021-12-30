import { getRepository, Repository } from 'typeorm'

import { env } from '../../../../config/env'
import { Session } from '../../entities/Session'

import type { User } from '../../entities/User'
import type { SessionsRepositoryInterface } from '../SessionsRepositoryInterface'

export class SessionsRepository implements SessionsRepositoryInterface {
  private repository: Repository<Session>

  constructor() {
    this.repository = getRepository(Session)
  }

  async create(user: User) {
    const session = this.repository.create({
      user,
      expires_at: new Date(Date.now() + +env.REFRESH_TOKEN_EXPIRES_AT)
    })
    await this.repository.save(session)
    return session
  }
}
