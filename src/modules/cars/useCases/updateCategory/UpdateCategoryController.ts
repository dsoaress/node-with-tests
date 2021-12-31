import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase)
    const result = await updateCategoryUseCase.execute(req.params.id, req.body)
    return res.json(result)
  }
}
