import { container } from 'tsyringe'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

import type { Request, Response } from 'express'
import type { Category } from '../../entities/Category'

export class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response<Category>> {
    const { name, description } = req.body
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
    const category = await createCategoryUseCase.execute({ name, description })
    return res.status(201).json(category)
  }
}
