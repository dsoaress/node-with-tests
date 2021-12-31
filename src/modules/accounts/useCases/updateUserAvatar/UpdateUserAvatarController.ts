import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase'

export class UpdateUserAvatarController {
  async handle(req: Request, res: Response) {
    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)
    const result = await updateUserAvatarUseCase.execute(req.params.id, req.file?.filename)
    return res.json(result)
  }
}
