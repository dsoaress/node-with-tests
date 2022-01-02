import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCarUseCase } from './CreateCarUseCase'

export class CreateCarController {
  async handle(req: Request, res: Response) {
    const createCarUseCase = container.resolve(CreateCarUseCase)
    const result = await createCarUseCase.execute(req.body)
    return res.status(201).json(result)
  }
}
