import { container } from 'tsyringe'

import { FindCategoryUseCase } from './FindCategoryUseCase'

import type { Request, Response } from 'express'
import type { Category } from '../../entities/Category'

export class FindCategoryController {
  async handle(req: Request, res: Response): Promise<Response<Category[]>> {
    const findCategoryUseCase = container.resolve(FindCategoryUseCase)
    const category = await findCategoryUseCase.execute(req.params.id)
    return res.json(category)
  }
}
