import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindCarUseCase } from './FindCarUseCase'

export class FindCarController {
  async handle(req: Request, res: Response) {
    const findCarUseCase = container.resolve(FindCarUseCase)
    const result = await findCarUseCase.execute(req.params.id)
    return res.json(result)
  }
}
