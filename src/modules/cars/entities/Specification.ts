import { IsNotEmpty, IsString } from 'class-validator'
import cuid from 'cuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('specifications')
export class Specification {
  @PrimaryColumn()
  id!: string

  @Column()
  @IsNotEmpty()
  @IsString()
  name!: string

  @Column()
  @IsNotEmpty()
  @IsString()
  description!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt?: Date

  constructor() {
    if (!this.id) {
      this.id = cuid()
    }
  }
}
