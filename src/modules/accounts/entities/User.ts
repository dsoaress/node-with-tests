import { Exclude } from 'class-transformer'
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length
} from 'class-validator'
import cuid from 'cuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn()
  id?: string

  @Column()
  @IsNotEmpty()
  @IsString()
  name!: string

  @Column()
  @IsEmail()
  email!: string

  @Column()
  @IsString()
  @Length(8, 32)
  @Exclude()
  password!: string

  @Column()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0
  })
  driver_license!: string

  @Column({ default: false })
  @IsOptional()
  @IsBoolean()
  admin!: boolean

  @CreateDateColumn()
  created_at?: Date

  constructor() {
    if (!this.id) {
      this.id = cuid()
    }
  }
}
