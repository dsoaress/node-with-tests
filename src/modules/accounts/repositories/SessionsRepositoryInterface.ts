import type { Session } from '../entities/Session'
import type { User } from '../entities/User'

export interface SessionsRepositoryInterface {
  create(user: User): Promise<Session>
}
