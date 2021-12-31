import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
    const result = await authenticateUserUseCase.execute(req.body)
    return res.json(result)
  }
}
