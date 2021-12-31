import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindCategoryUseCase } from './FindCategoryUseCase'

export class FindCategoryController {
  async handle(req: Request, res: Response) {
    const findCategoryUseCase = container.resolve(FindCategoryUseCase)
    const result = await findCategoryUseCase.execute(req.params.id)
    return res.json(result)
  }
}
