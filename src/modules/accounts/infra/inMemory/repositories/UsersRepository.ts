import { User } from '../../../models/User'
import { UsersRepositoryInterface } from '../../../repositories/UsersRepositoryInterface'

export class UsersRepository implements UsersRepositoryInterface {
  users: User[] = []

  async create(user: User) {
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

  async update(id: string, user: Partial<User>) {
    const userExists = await this.findById(id)

    if (!userExists) return undefined

    const updatedUser = { ...userExists, ...user }

    return updatedUser
  }

  async delete(id: string) {
    const user = await this.findById(id)
    if (!user) return undefined
    this.users = this.users.filter(user => user.id !== id)
  }
}
