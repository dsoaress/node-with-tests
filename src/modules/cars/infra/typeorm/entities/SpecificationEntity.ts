import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('specifications')
export class SpecificationEntity {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  description!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
