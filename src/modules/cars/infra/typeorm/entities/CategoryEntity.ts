import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

import { CarEntity } from './CarEntity'

@Entity('categories')
export class CategoryEntity {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @OneToMany(() => CarEntity, car => car.id)
  cars?: CarEntity[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt?: Date
}
