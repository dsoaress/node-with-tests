import { getRepository, Repository } from 'typeorm'

import { Car } from '@/cars/models/Car'
import { CarsRepositoryInterface } from '@/cars/repositories/CarsRepositoryInterface'

import { CarEntity } from '../entities/CarEntity'

export class CarsRepository implements CarsRepositoryInterface {
  private repository: Repository<CarEntity>

  constructor() {
    this.repository = getRepository(CarEntity)
  }

  async create(data: Car) {
    return await this.repository.save(data)
  }

  async findAll() {
    return await this.repository.find()
  }

  async findById(id: string) {
    return await this.repository.findOne(id)
  }

  async findByName(name: string) {
    return await this.repository.findOne({ name })
  }

  async update(id: string, data: Partial<Car>) {
    const carExists = await this.findById(id)

    if (!carExists) return undefined

    const updatedCar = { ...carExists, ...data }
    await this.repository.update(id, updatedCar)

    return updatedCar
  }

  async delete(id: string) {
    const car = await this.findById(id)
    if (!car) return undefined
    await this.repository.remove(car)
  }
}
