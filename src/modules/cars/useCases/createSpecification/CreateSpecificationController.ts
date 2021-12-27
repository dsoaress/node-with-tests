import { container } from 'tsyringe'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

import type { Request, Response } from 'express'
import type { Specification } from '../../entities/Specification'

export class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response<Specification>> {
    const { name, description } = req.body
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
    const specification = await createSpecificationUseCase.execute({ name, description })
    return res.status(201).json(specification)
  }
}
