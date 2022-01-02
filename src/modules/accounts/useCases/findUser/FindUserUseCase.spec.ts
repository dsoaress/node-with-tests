import 'reflect-metadata'

import { CreateUserDTO } from '@/accounts/dto/CreateUserDTO'
import { UsersRepository } from '@/accounts/infra/inMemory/repositories/UsersRepository'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'

import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { FindUserUseCase } from '../findUser/FindUserUseCase'

let createUserUseCase: CreateUserUseCase
let findUserUseCase: FindUserUseCase
let usersRepository: UsersRepositoryInterface
let user: CreateUserDTO

describe('FindUserUseCase', () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
    findUserUseCase = new FindUserUseCase(usersRepository)

    user = {
      name: 'User 1',
      email: 'test@test.com',
      password: '12345678',
      driverLicense: '12345678'
    }
  })

  it('should be able to find a user by id', async () => {
    const newUser = await createUserUseCase.execute(user)
    const result = await findUserUseCase.execute(newUser.id)
    expect(result.id).toBe(newUser.id)
  })
})
