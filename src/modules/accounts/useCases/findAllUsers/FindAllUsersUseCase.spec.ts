import 'reflect-metadata'

import { CreateUserDTO } from '../../dto/CreateUserDTO'
import { UsersRepository } from '../../infra/inMemory/repositories/UsersRepository'
import { UsersRepositoryInterface } from '../../repositories/UsersRepositoryInterface'
import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { FindAllUsersUseCase } from './FindAllUsersUseCase'

let createUserUseCase: CreateUserUseCase
let findAllUsersUseCase: FindAllUsersUseCase
let usersRepository: UsersRepositoryInterface
let user: CreateUserDTO

describe('FindAllUsersUseCase', () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
    findAllUsersUseCase = new FindAllUsersUseCase(usersRepository)

    user = {
      name: 'User 1',
      email: 'test@test.com',
      password: '12345678',
      driverLicense: '12345678'
    }
  })

  it('should be able to find all users', async () => {
    await createUserUseCase.execute(user)
    const users = await findAllUsersUseCase.execute()
    expect(users).toHaveLength(1)
  })
})
