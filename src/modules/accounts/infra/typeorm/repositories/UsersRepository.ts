import { getRepository, Repository } from 'typeorm'

import { User } from '@/accounts/models/User'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'

import { UserEntity } from '../entities/UserEntity'

export class UsersRepository implements UsersRepositoryInterface {
  private repository: Repository<UserEntity>

  constructor() {
    this.repository = getRepository(UserEntity)
  }

  async create(user: User) {
    return await this.repository.save(user)
  }

  async findAll() {
    return await this.repository.find()
  }

  async findById(id: string) {
    return await this.repository.findOne(id)
  }

  async findByEmail(email: string) {
    return await this.repository.findOne({ email })
  }

  async update(id: string, user: Partial<User>) {
    const userExists = await this.findById(id)

    if (!userExists) return undefined

    const updatedUser = { ...userExists, ...user }
    await this.repository.update(id, { ...updatedUser })

    return updatedUser
  }

  async delete(id: string) {
    const user = await this.findById(id)
    if (!user) return undefined
    await this.repository.remove(user)
  }
}
