import type { Request, Response } from 'express'
import type { DeleteSpecificationUseCase } from './DeleteSpecificationUseCase'

export class DeleteSpecificationController {
  constructor(private deleteSpecificationUseCase: DeleteSpecificationUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<void>> {
    await this.deleteSpecificationUseCase.execute(req.params.id)
    return res.status(204).send()
  }
}
