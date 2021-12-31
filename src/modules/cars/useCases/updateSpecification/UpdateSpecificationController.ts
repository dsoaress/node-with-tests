import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateSpecificationUseCase } from './UpdateSpecificationUseCase'

export class UpdateSpecificationController {
  async handle(req: Request, res: Response) {
    const updateSpecificationUseCase = container.resolve(UpdateSpecificationUseCase)
    const result = await updateSpecificationUseCase.execute(req.params.id, req.body)
    return res.json(result)
  }
}
