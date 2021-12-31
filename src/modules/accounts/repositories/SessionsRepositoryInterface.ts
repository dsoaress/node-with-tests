import type { Session } from '../entities/Session'
import type { User } from '../entities/User'

export interface SessionsRepositoryInterface {
  createSession(user: User): Promise<Session>
  findSession(id: string): Promise<Session | undefined>
  deleteSession(id: string): Promise<void | null>
}
