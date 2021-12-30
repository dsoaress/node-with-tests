import { IsNotEmpty, IsString } from 'class-validator'
import cuid from 'cuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('specifications')
export class Specification {
  @PrimaryColumn()
  id?: string

  @Column()
  @IsNotEmpty()
  @IsString()
  name!: string

  @Column()
  @IsNotEmpty()
  @IsString()
  description!: string

  @CreateDateColumn()
  created_at?: Date

  constructor() {
    if (!this.id) {
      this.id = cuid()
    }
  }
}
