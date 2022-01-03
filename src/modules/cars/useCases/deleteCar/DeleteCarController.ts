import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteCarUseCase } from './DeleteCarUseCase'

export class DeleteCarController {
  async handle(req: Request, res: Response) {
    const deleteCarUseCase = container.resolve(DeleteCarUseCase)
    await deleteCarUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
