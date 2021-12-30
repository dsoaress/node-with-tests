import type { CreateCategoryDTO } from '../dto/CreateCategoryDTO'
import type { UpdateCategoryDTO } from '../dto/UpdateCategoryDTO'
import type { Category } from '../entities/Category'

export interface CategoriesRepositoryInterface {
  create({ name, description }: CreateCategoryDTO): Promise<Category>
  findAll(): Promise<Category[]>
  findById(id: string): Promise<Category | undefined>
  findByName(name: string): Promise<Category | undefined>
  update(id: string, { name, description }: UpdateCategoryDTO): Promise<Category | null>
  delete(id: string): Promise<void | null>
}
