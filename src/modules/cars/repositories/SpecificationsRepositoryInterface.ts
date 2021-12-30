import type { CreateSpecificationDTO } from '../dto/CreateSpecificationDTO'
import type { UpdateSpecificationDTO } from '../dto/UpdateSpecificationDTO'
import type { Specification } from '../entities/Specification'

export interface SpecificationsRepositoryInterface {
  create({ name, description }: CreateSpecificationDTO): Promise<Specification>
  findAll(): Promise<Specification[]>
  findById(id: string): Promise<Specification | undefined>
  findByName(name: string): Promise<Specification | undefined>
  update(id: string, { name, description }: UpdateSpecificationDTO): Promise<Specification | null>
  delete(id: string): Promise<void | null>
}
