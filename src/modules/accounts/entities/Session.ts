import cuid from 'cuid'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

import { User } from './User'

@Entity('sessions')
export class Session {
  @PrimaryColumn()
  id!: string

  @ManyToOne(() => User, user => user.sessions)
  @JoinColumn({ name: 'userId' })
  user!: User

  @Column()
  expiresAt!: Date

  @CreateDateColumn()
  createdAt!: Date

  constructor() {
    if (!this.id) {
      this.id = cuid()
    }
  }
}
