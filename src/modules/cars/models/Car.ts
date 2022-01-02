import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator'
import cuid from 'cuid'

import { Category } from './Category'

export class Car {
  id!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsString()
  description!: string

  @IsNotEmpty()
  @IsNumber()
  dailyPrice!: number

  @IsOptional()
  @IsBoolean()
  available!: boolean

  @IsNotEmpty()
  @IsString()
  licensePlate!: string

  @IsNotEmpty()
  @IsNumber()
  fineAmount!: number

  @IsNotEmpty()
  @IsString()
  brand!: string

  category!: Category

  createdAt!: Date

  updatedAt?: Date

  constructor(data: Partial<Car>) {
    if (!this.id) this.id = cuid()
    if (!this.available) this.available = true
    if (!this.createdAt) this.createdAt = new Date()

    Object.assign(this, data)
  }
}
