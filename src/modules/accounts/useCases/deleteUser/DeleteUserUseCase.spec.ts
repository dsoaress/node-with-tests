import 'reflect-metadata'

import { CreateUserDTO } from '@/accounts/dto/CreateUserDTO'
import { UsersRepository } from '@/accounts/infra/inMemory/repositories/UsersRepository'
import { UsersRepositoryInterface } from '@/accounts/repositories/UsersRepositoryInterface'

import { CreateUserUseCase } from '../createUser/CreateUserUseCase'
import { FindUserUseCase } from '../findUser/FindUserUseCase'
import { DeleteUserUseCase } from './DeleteUserUseCase'

let deleteUserUseCase: DeleteUserUseCase
let createUserUseCase: CreateUserUseCase
let findUserUseCase: FindUserUseCase
let usersRepository: UsersRepositoryInterface
let user: CreateUserDTO

describe('DeleteUserUseCase', () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
    findUserUseCase = new FindUserUseCase(usersRepository)
    deleteUserUseCase = new DeleteUserUseCase(usersRepository)

    user = {
      name: 'User 1',
      email: 'test@test.com',
      password: '12345678',
      driverLicense: '12345678'
    }
  })

  it('should be able to delete a user', async () => {
    const newUser = await createUserUseCase.execute(user)
    await deleteUserUseCase.execute(newUser.id)
    const result = await findUserUseCase.execute(newUser.id)
    expect(result).toBeFalsy()
  })
})
