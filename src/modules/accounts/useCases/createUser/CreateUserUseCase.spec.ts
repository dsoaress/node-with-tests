import 'reflect-metadata'

import { AppError } from '../../../../shared/errors/AppError'
import { CreateUserDTO } from '../../dto/CreateUserDTO'
import { UsersRepository } from '../../infra/inMemory/repositories/UsersRepository'
import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'
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

  it('should be able to create a user with admin privileges', async () => {
    user.admin = true
    const userExists = await createUserUseCase.execute(user, true)
    expect(userExists).toBeTruthy()
  })

  it('should not be able to create a user with admin privileges without permission', async () => {
    user.admin = true
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a new user with the same email', async () => {
    await createUserUseCase.execute(user)
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid name', async () => {
    user.name = ''
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid email', async () => {
    user.email = 'test'
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an empty email', async () => {
    user.email = ''
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid password (less then 8 characters)', async () => {
    user.password = '1234567'
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid password (more then 32 characters)', async () => {
    user.password = '123456789012345678901234567890123'
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user with an invalid driver license', async () => {
    user.driverLicense = ''
    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError)
  })
})
