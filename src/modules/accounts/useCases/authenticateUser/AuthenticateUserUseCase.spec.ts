import { UsersRepository } from '../../repositories/inMemory/UsersRepository'
import { AppError } from '../../../../shared/errors/AppError'
import { SessionsRepository } from '../../repositories/inMemory/SessionsRepository'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

import type { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'
import type { SessionsRepositoryInterface } from '../../repositories/SessionsRepositoryInterface'
import type { CreateUserDTO } from '../../dto/CreateUserDTO'
import type { AuthenticateUserDTO } from '../../dto/AuthenticateUserDTO'

let createUserUseCase: CreateUserUseCase
let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepository: UsersRepositoryInterface
let sessionsRepository: SessionsRepositoryInterface
let user: CreateUserDTO
let credentials: AuthenticateUserDTO

describe('AuthenticateUserUseCase', () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository()
    sessionsRepository = new SessionsRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository, sessionsRepository)

    user = {
      name: 'User 1',
      email: 'test@test.com',
      password: '12345678',
      driverLicense: '12345678'
    }

    credentials = {
      email: user.email,
      password: user.password
    }
  })

  it('should be able to authenticate a user', async () => {
    await createUserUseCase.execute(user)
    const { token, refreshToken } = await authenticateUserUseCase.execute(credentials)
    expect(token && refreshToken).toBeTruthy()
  })

  it('should not be able to authenticate a user with an invalid email', async () => {
    const invalidUser = { ...credentials, email: '' }
    await expect(authenticateUserUseCase.execute(invalidUser)).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate a user with an invalid password', async () => {
    const invalidUser = { ...credentials, password: '' }
    await expect(authenticateUserUseCase.execute(invalidUser)).rejects.toBeInstanceOf(AppError)
  })
})
