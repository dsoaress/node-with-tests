import { Specification } from '../models/Specification'

export interface SpecificationsRepositoryInterface {
  create(specification: Specification): Promise<Specification>
  findAll(): Promise<Specification[]>
  findById(id: string): Promise<Specification | undefined>
  findByName(name: string): Promise<Specification | undefined>
  update(id: string, specification: Partial<Specification>): Promise<Specification | undefined>
  delete(id: string): Promise<void | undefined>
}
