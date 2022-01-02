import { Exclude } from 'class-transformer'
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import cuid from 'cuid'

export class User {
  id!: string

  @IsNotEmpty()
  @IsString()
  name!: string

  @IsEmail()
  email!: string

  @IsString()
  @Length(8, 32)
  @Exclude()
  password!: string

  @IsOptional()
  avatar?: string

  @IsNotEmpty()
  @IsString()
  driverLicense!: string

  @IsOptional()
  @IsBoolean()
  admin?: boolean

  createdAt!: Date

  updatedAt!: Date

  constructor(data: Partial<User>) {
    if (!this.id) this.id = cuid()
    if (!this.admin) this.admin = false
    if (!this.createdAt) this.createdAt = new Date()
    this.updatedAt = new Date()

    Object.assign(this, data)
  }
}
