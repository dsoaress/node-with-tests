import { Car } from '@/cars/models/Car'
import { CarsRepositoryInterface } from '@/cars/repositories/CarsRepositoryInterface'

export class CarsRepository implements CarsRepositoryInterface {
  cars: Car[] = []

  async create(data: Car) {
    this.cars.push(data)
    return data
  }

  async findAll() {
    return this.cars
  }

  async findById(id: string) {
    return this.cars.find(car => car.id === id)
  }

  async findByName(name: string) {
    return this.cars.find(car => car.name === name)
  }

  async update(id: string, data: Partial<Car>) {
    const carExists = await this.findById(id)

    if (!carExists) return undefined

    const updatedCar = { ...carExists, ...data }

    return updatedCar
  }

  async delete(id: string) {
    const car = await this.findById(id)
    if (!car) return undefined
    this.cars = this.cars.filter(car => car.id !== id)
  }
}
