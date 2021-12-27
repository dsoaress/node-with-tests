import { container } from 'tsyringe'

import { FindSpecificationUseCase } from './FindSpecificationUseCase'

import type { Request, Response } from 'express'
import type { Specification } from '../../entities/Specification'

export class FindSpecificationController {
  async handle(req: Request, res: Response): Promise<Response<Specification[]>> {
    const findSpecificationUseCase = container.resolve(FindSpecificationUseCase)
    const specification = await findSpecificationUseCase.execute(req.params.id)
    return res.json(specification)
  }
}
