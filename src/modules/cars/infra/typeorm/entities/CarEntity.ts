import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

import { CategoryEntity } from './CategoryEntity'

@Entity('cars')
export class CarEntity {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @Column()
  dailyPrice!: number

  @Column({ default: true })
  available!: boolean

  @Column()
  licensePlate!: string

  @Column()
  fineAmount!: number

  @Column()
  brand!: string

  @ManyToOne(() => CategoryEntity, category => category.cars)
  @JoinColumn({ name: 'categoryId' })
  category!: CategoryEntity

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
