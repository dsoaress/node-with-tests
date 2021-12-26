import type { Request, Response } from 'express'
import type { DeleteCategoryUseCase } from './DeleteCategoryUseCase'

export class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<void>> {
    await this.deleteCategoryUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
