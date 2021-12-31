import { hashSync } from 'bcrypt'

import { User } from '../../entities/User'

import type { CreateUserDTO } from '../../dto/CreateUserDTO'
import type { UpdateUserDTO } from '../../dto/UpdateUserDTO'
import type { UsersRepositoryInterface } from '../UsersRepositoryInterface'

export class UsersRepository implements UsersRepositoryInterface {
  users: User[] = []

  async create(data: CreateUserDTO) {
    const user = new User()

    data.password = hashSync(data.password, 10)
    Object.assign(user, data)

    this.users.push(user)

    return user
  }

  async findAll() {
    return this.users
  }

  async findById(id: string) {
    return this.users.find(user => user.id === id)
  }

  async findByEmail(email: string) {
    return this.users.find(user => user.email === email)
  }

  async update(id: string, data: UpdateUserDTO) {
    const user = await this.findById(id)

    if (!user) {
      return null
    }

    const updatedUser = { ...user, ...data }

    return updatedUser
  }

  async delete(id: string) {
    const user = await this.findById(id)

    if (!user) {
      return null
    }

    this.users = this.users.filter(user => user.id !== id)
  }
}
