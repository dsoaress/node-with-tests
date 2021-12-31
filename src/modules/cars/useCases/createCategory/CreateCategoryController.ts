import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    const result = await createCategoryUseCase.execute(req.body)
    return res.status(201).json(result)
  }
}
