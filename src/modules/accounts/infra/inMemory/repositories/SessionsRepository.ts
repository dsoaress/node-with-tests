import { Session } from '../../../models/Session'
import { SessionsRepositoryInterface } from '../../../repositories/SessionsRepositoryInterface'

export class SessionsRepository implements SessionsRepositoryInterface {
  sessions: Session[] = []

  async createSession(session: Session) {
    this.sessions.push(session)
    return session
  }

  async findSession(id: string) {
    return this.sessions.find(session => session.id === id)
  }

  async deleteSession(id: string) {
    const session = await this.findSession(id)
    if (!session) return undefined
    this.sessions = this.sessions.filter(session => session.id !== id)
  }
}
