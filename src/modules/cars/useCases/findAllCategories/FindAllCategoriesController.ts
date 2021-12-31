import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'

export class FindAllCategoriesController {
  async handle(_req: Request, res: Response) {
    const findAllCategoriesUseCase = container.resolve(FindAllCategoriesUseCase)
    const result = await findAllCategoriesUseCase.execute()
    return res.json(result)
  }
}
