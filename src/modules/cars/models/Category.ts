import { IsNotEmpty, IsString } from 'class-validator'
import cuid from 'cuid'

export class Category {
  id!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsString()
  description!: string

  createdAt!: Date

  updatedAt?: Date

  constructor(data: Partial<Category>) {
    if (!this.id) this.id = cuid()
    if (!this.createdAt) this.createdAt = new Date()

    Object.assign(this, data)
  }
}
