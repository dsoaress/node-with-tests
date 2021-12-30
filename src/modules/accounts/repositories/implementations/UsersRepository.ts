import { getRepository, Repository } from 'typeorm'
import { validate } from 'class-validator'
import { hashSync } from 'bcrypt'

import { User } from '../../entities/User'
import { AppError } from '../../../../shared/errors/AppError'

import type { UsersRepositoryInterface } from '../UsersRepositoryInterface'
import type { CreateUserDTO } from '../../dto/CreateUserDTO'
import type { UpdateUserDTO } from '../../dto/UpdateUserDTO'

export class UsersRepository implements UsersRepositoryInterface {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create(data: CreateUserDTO) {
    const user = this.repository.create(data)
    const errors = await validate(user)

    if (errors.length) {
      throw new AppError(errors)
    }

    user.password = hashSync(data.password, 10)
    await this.repository.save(user)
    return user
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

  async update(id: string, data: UpdateUserDTO) {
    const user = await this.findById(id)

    if (!user) {
      return null
    }

    const updatedUser = { ...user, ...data }
    await this.repository.save(updatedUser)
    return updatedUser
  }

  async delete(id: string) {
    const user = await this.findById(id)

    if (!user) {
      return null
    }

    await this.repository.remove(user)
  }
}
