import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindAllCarsUseCase } from './FindAllCarsUseCase'

export class FindAllCarsController {
  async handle(_req: Request, res: Response) {
    const findAllCarsUseCase = container.resolve(FindAllCarsUseCase)
    const result = await findAllCarsUseCase.execute()
    return res.json(result)
  }
}
