import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindSpecificationUseCase } from './FindSpecificationUseCase'

export class FindSpecificationController {
  async handle(req: Request, res: Response) {
    const findSpecificationUseCase = container.resolve(FindSpecificationUseCase)
    const result = await findSpecificationUseCase.execute(req.params.id)
    return res.json(result)
  }
}
