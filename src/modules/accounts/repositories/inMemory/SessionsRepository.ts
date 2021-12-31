import { env } from '../../../../config/env'
import { Session } from '../../entities/Session'

import type { User } from '../../entities/User'
import type { SessionsRepositoryInterface } from '../SessionsRepositoryInterface'

export class SessionsRepository implements SessionsRepositoryInterface {
  sessions: Session[] = []

  async createSession(user: User) {
    const session = new Session()

    Object.assign(session, {
      user,
      expiresAt: new Date(Date.now() + +env.REFRESH_TOKEN_EXPIRES_AT)
    })

    this.sessions.push(session)

    return session
  }
  async findSession(id: string) {
    return this.sessions.find(session => session.id === id)
  }
  async deleteSession(id: string) {
    const session = await this.findSession(id)

    if (!session) {
      return null
    }

    this.sessions = this.sessions.filter(session => session.id !== id)
  }
}
