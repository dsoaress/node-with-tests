import { Session } from '../models/Session'

export interface SessionsRepositoryInterface {
  createSession(session: Session): Promise<Session>
  findSession(id: string): Promise<Session | undefined>
  deleteSession(id: string): Promise<void | undefined>
}
