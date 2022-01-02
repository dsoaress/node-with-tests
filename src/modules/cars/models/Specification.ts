import { IsNotEmpty, IsString } from 'class-validator'
import cuid from 'cuid'

export class Specification {
  id!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsString()
  description!: string

  createdAt!: Date

  updatedAt!: Date

  constructor(data: Partial<Specification>) {
    if (!this.id) this.id = cuid()
    if (!this.createdAt) this.createdAt = new Date()
    this.updatedAt = new Date()

    Object.assign(this, data)
  }
}
