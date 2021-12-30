import { container } from 'tsyringe'

import { FindUserUseCase } from './FindUserUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'

export class FindUserController {
  async handle(req: Request, res: Response): Promise<Response<User>> {
    const findUserUseCase = container.resolve(FindUserUseCase)
    const user = await findUserUseCase.execute(req.params.id)
    return res.json(user)
  }
}
