import { container } from 'tsyringe'

import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'

import type { Request, Response } from 'express'

export class DeleteCategoryController {
  async handle(req: Request, res: Response): Promise<Response<void>> {
    const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase)
    await deleteCategoryUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
