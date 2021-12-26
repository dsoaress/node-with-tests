import type { Request, Response } from 'express'
import type { Category } from '../../models/Category'
import type { FindCategoryUseCase } from './FindCategoryUseCase'

export class FindCategoryController {
  constructor(private findCategoryUseCase: FindCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Category[]>> {
    const category = await this.findCategoryUseCase.execute(req.params.id)
    return res.json(category)
  }
}
