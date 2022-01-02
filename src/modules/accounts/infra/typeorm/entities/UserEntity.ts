import { Exclude } from 'class-transformer'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

import { SessionEntity } from './SessionEntity'

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  @Exclude()
  password!: string

  @Column()
  avatar?: string

  @Column()
  driverLicense!: string

  @Column({ default: false })
  admin!: boolean

  @OneToMany(() => SessionEntity, session => session.user)
  sessions?: SessionEntity[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
