import type { CreateCategoryUseCase } from './CreateCategoryUseCase'
import type { Category } from '../../models/Category'
import type { Request, Response } from 'express'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Category>> {
    const { name, description } = req.body

    const category = await this.createCategoryUseCase.execute({ name, description })

    return res.status(201).json(category)
  }
}
