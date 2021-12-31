import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindUserUseCase } from './FindUserUseCase'

export class FindUserController {
  async handle(req: Request, res: Response) {
    const findUserUseCase = container.resolve(FindUserUseCase)
    const result = await findUserUseCase.execute(req.params.id)
    return res.json(result)
  }
}
