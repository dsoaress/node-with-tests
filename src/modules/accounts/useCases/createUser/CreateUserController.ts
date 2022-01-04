import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserUseCase = container.resolve(CreateUserUseCase)
    const result = await createUserUseCase.execute(req.body, req.user?.admin)
    return res.status(201).json(result)
  }
}
