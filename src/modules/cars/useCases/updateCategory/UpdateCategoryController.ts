import { container } from 'tsyringe'

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

import type { Request, Response } from 'express'
import type { Category } from '../../entities/Category'

export class UpdateCategoryController {
  async handle(req: Request, res: Response): Promise<Response<Category>> {
    const { name, description } = req.body
    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase)
    const category = await updateCategoryUseCase.execute(req.params.id, { name, description })
    return res.json(category)
  }
}
