import { Category } from '../models/Category'

export interface CategoriesRepositoryInterface {
  create(data: Category): Promise<Category>
  findAll(): Promise<Category[]>
  findById(id: string): Promise<Category | undefined>
  findByName(name: string): Promise<Category | undefined>
  update(id: string, data: Partial<Category>): Promise<Category | undefined>
  delete(id: string): Promise<void>
}
