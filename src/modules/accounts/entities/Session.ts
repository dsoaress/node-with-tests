import cuid from 'cuid'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

import { User } from './User'

@Entity('sessions')
export class Session {
  @PrimaryColumn()
  id?: string

  @ManyToOne(() => User, user => user.sessions)
  @JoinColumn({ name: 'user_id' })
  user!: User

  @Column()
  expires_at!: Date

  @CreateDateColumn()
  created_at!: Date

  constructor() {
    if (!this.id) {
      this.id = cuid()
    }
  }
}
