import { getRepository, Repository } from 'typeorm'

import { Session } from '@/accounts/models/Session'
import { SessionsRepositoryInterface } from '@/accounts/repositories/SessionsRepositoryInterface'

import { SessionEntity } from '../entities/SessionEntity'

export class SessionsRepository implements SessionsRepositoryInterface {
  private repository: Repository<SessionEntity>

  constructor() {
    this.repository = getRepository(SessionEntity)
  }

  async createSession(session: Session) {
    return await this.repository.save(session)
  }

  async findSession(id: string) {
    return await this.repository.findOne(id, {
      relations: ['user']
    })
  }

  async deleteSession(id: string) {
    await this.repository.delete(id)
  }
}
