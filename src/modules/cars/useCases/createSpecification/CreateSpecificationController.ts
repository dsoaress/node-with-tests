import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

export class CreateSpecificationController {
  async handle(req: Request, res: Response) {
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
    const result = await createSpecificationUseCase.execute(req.body)
    return res.status(201).json(result)
  }
}
