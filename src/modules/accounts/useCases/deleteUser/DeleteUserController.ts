import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const deleteUserUseCase = container.resolve(DeleteUserUseCase)
    await deleteUserUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
