import type { ValidationError } from 'class-validator'

export class AppError {
  status: number
  error: string
  timestamp: string

  constructor(error: string | ValidationError[], status = 400) {
    this.status = status
    this.error =
      // @ts-ignore
      typeof error === 'string' ? error : Object.values(error[0].constraints as any)[0].toString()
    this.timestamp = new Date().toISOString()
  }
}
