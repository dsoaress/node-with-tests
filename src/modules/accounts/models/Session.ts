import cuid from 'cuid'

import { env } from '@/config/env'

import { User } from './User'

export class Session {
  id!: string
  user!: User
  expiresAt!: Date
  createdAt!: Date

  constructor(user: User) {
    const now = new Date()
    const expiresAt = new Date(now.getTime() + +env.REFRESH_TOKEN_EXPIRES_AT)

    this.id = cuid()
    this.expiresAt = expiresAt
    this.createdAt = now

    Object.assign(this, { user })
  }
}
