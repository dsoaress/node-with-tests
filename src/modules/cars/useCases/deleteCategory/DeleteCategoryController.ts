import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase)
    await deleteCategoryUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
