import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const updateUserUseCase = container.resolve(UpdateUserUseCase)
    const result = await updateUserUseCase.execute(req.params.id, req.body)
    return res.json(result)
  }
}
