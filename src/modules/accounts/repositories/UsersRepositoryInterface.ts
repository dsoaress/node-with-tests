import { User } from '../models/User'

export interface UsersRepositoryInterface {
  create(user: User): Promise<User>
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  update(id: string, user: Partial<User>): Promise<User | undefined>
  delete(id: string): Promise<void | undefined>
}
