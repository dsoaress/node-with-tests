import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('categories')
export class CategoryEntity {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt?: Date
}
