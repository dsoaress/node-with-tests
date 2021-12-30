import { container } from 'tsyringe'

import { DeleteUserUseCase } from './DeleteUserUseCase'

import type { Request, Response } from 'express'

export class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response<void>> {
    const deleteUserUseCase = container.resolve(DeleteUserUseCase)
    await deleteUserUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
