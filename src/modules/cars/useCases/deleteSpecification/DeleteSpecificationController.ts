import { container } from 'tsyringe'

import { DeleteSpecificationUseCase } from './DeleteSpecificationUseCase'

import type { Request, Response } from 'express'

export class DeleteSpecificationController {
  async handle(req: Request, res: Response): Promise<Response<void>> {
    const deleteSpecificationUseCase = container.resolve(DeleteSpecificationUseCase)
    await deleteSpecificationUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
