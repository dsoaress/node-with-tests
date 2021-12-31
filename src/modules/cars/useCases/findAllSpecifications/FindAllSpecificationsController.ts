import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindAllSpecificationsUseCase } from './FindAllSpecificationsUseCase'

export class FindAllSpecificationsController {
  async handle(_req: Request, res: Response) {
    const findAllSpecificationsUseCase = container.resolve(FindAllSpecificationsUseCase)
    const result = await findAllSpecificationsUseCase.execute()
    return res.json(result)
  }
}
