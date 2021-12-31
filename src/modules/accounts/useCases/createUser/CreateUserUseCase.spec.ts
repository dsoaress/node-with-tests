import 'reflect-metadata'

import { CreateUserDTO } from '@/accounts/dto/CreateUserDTO'
import { UsersRepository } from '@/accounts/infra/inMemory/repositories/UsersRepository'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'
import { AppError } from '@/shared/errors/AppError'

import { CreateUserUseCase } from './CreateUserUseCase'

let createUserUseCase: CreateUserUseCase
let usersRepository: UsersRepositoryInterface
let user: CreateUserDTO

describe('CreateUserUseCase', () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)

    user = {
      name: 'User 1',
      email: 'test@test.com',
      password: '12345678',
      driverLicense: '12345678'
    }
  })

  it('should be able to create a user', async () => {
    const userExists = await createUserUseCase.execute(user)
    expect(userExists).toBeTruthy()
  })

  it('should not be able to create a new user with the same email', async () => {
    await createUserUseCase.execute(user)
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid name', async () => {
    const invalidUser = { ...user, name: '' }
    await expect(createUserUseCase.execute(invalidUser)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid email', async () => {
    const invalidUser = { ...user, email: '' }
    await expect(createUserUseCase.execute(invalidUser)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid password', async () => {
    const invalidUser = { ...user, password: '' }
    await expect(createUserUseCase.execute(invalidUser)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid driver license', async () => {
    const invalidUser = { ...user, driverLicense: '' }
    await expect(createUserUseCase.execute(invalidUser)).rejects.toBeInstanceOf(AppError)
  })
})
