import type { CreateUserDTO } from '../dto/CreateUserDTO'
import type { UpdateUserDTO } from '../dto/UpdateUserDTO'
import type { User } from '../entities/User'

export interface UsersRepositoryInterface {
  create(data: CreateUserDTO): Promise<User>
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  update(id: string, data: UpdateUserDTO): Promise<User | null>
  delete(id: string): Promise<void | null>
}
