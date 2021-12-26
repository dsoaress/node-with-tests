import {
  CreateSpecificationDTO,
  UpdateSpecificationDTO
} from './implementations/SpecificationsRepository'

import type { Specification } from '../models/Specification'

export interface SpecificationsRepositoryInterface {
  create({ name, description }: CreateSpecificationDTO): Promise<Specification>
  findAll(): Promise<Specification[]>
  findById(id: string): Promise<Specification | undefined>
  findByName(name: string): Promise<Specification | undefined>
  update(id: string, { name, description }: UpdateSpecificationDTO): Promise<Specification | null>
  delete(id: string): Promise<void | null>
}
