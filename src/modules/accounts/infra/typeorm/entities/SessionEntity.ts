import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

import { UserEntity } from './UserEntity'

@Entity('sessions')
export class SessionEntity {
  @PrimaryColumn()
  id!: string

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({ name: 'userId' })
  user!: UserEntity

  @Column()
  expiresAt!: Date

  @CreateDateColumn()
  createdAt!: Date
}
