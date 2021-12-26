import type { UpdateCategoryUseCase } from './UpdateCategoryUseCase'
import type { Request, Response } from 'express'
import type { Category } from '../../models/Category'

export class UpdateCategoryController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Category>> {
    const { name, description } = req.body
    const category = await this.updateCategoryUseCase.execute(req.params.id, { name, description })
    return res.json(category)
  }
}
