import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteSpecificationUseCase } from './DeleteSpecificationUseCase'

export class DeleteSpecificationController {
  async handle(req: Request, res: Response) {
    const deleteSpecificationUseCase = container.resolve(DeleteSpecificationUseCase)
    await deleteSpecificationUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
