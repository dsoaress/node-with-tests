import { Car } from '../models/Car'

export interface CarsRepositoryInterface {
  create(data: Car): Promise<Car>
  findAll(): Promise<Car[]>
  findById(id: string): Promise<Car | undefined>
  findByName(name: string): Promise<Car | undefined>
  update(id: string, data: Partial<Car>): Promise<Car | undefined>
  delete(id: string): Promise<void>
}
