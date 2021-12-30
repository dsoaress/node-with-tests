import { container } from 'tsyringe'

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'

export class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response<User>> {
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
    const result = await updateUserAvatarUseCase.execute(req.params.id, req.file?.filename)
    return res.json(result)
  }
}
