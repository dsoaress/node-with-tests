import type { Request, Response } from 'express'
import type { Specification } from '../../models/Specification'
import type { UpdateSpecificationUseCase } from './UpdateSpecificationUseCase'

export class UpdateSpecificationController {
  constructor(private updateSpecificationUseCase: UpdateSpecificationUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Specification>> {
    const { name, description } = req.body
    const specification = await this.updateSpecificationUseCase.execute(req.params.id, {
      name,
      description
    })
    return res.json(specification)
  }
}
