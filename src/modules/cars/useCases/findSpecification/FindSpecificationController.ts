import type { Request, Response } from 'express'
import type { Specification } from '../../entities/Specification'
import type { FindSpecificationUseCase } from './FindSpecificationUseCase'

export class FindSpecificationController {
  constructor(private findSpecificationUseCase: FindSpecificationUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Specification[]>> {
    const specification = await this.findSpecificationUseCase.execute(req.params.id)
    return res.json(specification)
  }
}
