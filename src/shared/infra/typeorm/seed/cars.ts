import { lorem, vehicle } from 'faker'
import { getRepository } from 'typeorm'

import { env } from '../../../../config/env'
import { CarEntity } from '../../../../modules/cars/infra/typeorm/entities/CarEntity'
import { CategoryEntity } from '../../../../modules/cars/infra/typeorm/entities/CategoryEntity'
import { Car } from '../../../../modules/cars/models/Car'
import { Category } from '../../../../modules/cars/models/Category'
import { createTypeormConnection } from '../'

export async function createCars() {
  const connection = await createTypeormConnection()
  const categoriesRepository = getRepository(CategoryEntity)
  const carsRepository = getRepository(CarEntity)

  const categories = await categoriesRepository.find()
  const cars = await carsRepository.find()

  if ((!categories.length || !cars.length) && env.NODE_ENV !== 'production') {
    const categoryA = new Category({
      name: vehicle.type(),
      description: lorem.sentence(8)
    })

    const categoryB = new Category({
      name: vehicle.vehicle(),
      description: lorem.sentence(8)
    })

    const carA = new Car({
      name: vehicle.model(),
      description: lorem.sentence(8),
      dailyPrice: Math.floor(Math.random() * 100),
      licensePlate: vehicle.vrm(),
      fineAmount: Math.floor(Math.random() * 100),
      brand: vehicle.manufacturer(),
      category: categoryA
    })

    const carB = new Car({
      name: vehicle.model(),
      description: lorem.sentence(8),
      dailyPrice: Math.floor(Math.random() * 100),
      licensePlate: vehicle.vrm(),
      fineAmount: Math.floor(Math.random() * 100),
      brand: vehicle.manufacturer(),
      category: categoryB
    })

    await categoriesRepository.save(categoryA)
    await categoriesRepository.save(categoryB)
    await carsRepository.save(carA)
    await carsRepository.save(carB)

    console.log('Cars created')
  }

  await connection.close()
}
