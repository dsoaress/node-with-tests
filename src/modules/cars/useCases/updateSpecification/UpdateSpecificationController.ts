import { container } from 'tsyringe'

import { UpdateSpecificationUseCase } from './UpdateSpecificationUseCase'

import type { Request, Response } from 'express'
import type { Specification } from '../../entities/Specification'

export class UpdateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response<Specification>> {
    const { name, description } = req.body
    const updateSpecificationUseCase = container.resolve(UpdateSpecificationUseCase)
    const specification = await updateSpecificationUseCase.execute(req.params.id, {
      name,
      description
    })
    return res.json(specification)
  }
}
