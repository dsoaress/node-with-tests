import { CreateCategoryDTO, UpdateCategoryDTO } from './implementations/CategoriesRepository'

import type { Category } from '../models/Category'

export interface CategoriesRepositoryInterface {
  create({ name, description }: CreateCategoryDTO): Promise<Category>
  findAll(): Promise<Category[]>
  findById(id: string): Promise<Category | undefined>
  findByName(name: string): Promise<Category | undefined>
  update(id: string, { name, description }: UpdateCategoryDTO): Promise<Category | null>
  delete(id: string): Promise<void | null>
}
