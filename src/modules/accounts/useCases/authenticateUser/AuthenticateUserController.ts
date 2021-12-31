import { container } from 'tsyringe'

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'
import type { AuthenticateUserDTO } from '../../dto/AuthenticateUserDTO'

export class AuthenticateUserController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response<User & { token: string; refresh_token: string }>> {
    const { email, password } = req.body as AuthenticateUserDTO
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
    const result = await authenticateUserUseCase.execute({ email, password })
    return res.json(result)
  }
}
