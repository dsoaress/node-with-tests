import { container } from 'tsyringe'

import { UpdateUserUseCase } from './UpdateUserUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response<User>> {
    const updateUserUseCase = container.resolve(UpdateUserUseCase)
    const user = await updateUserUseCase.execute(req.params.id, req.body)
    return res.json(user)
  }
}
