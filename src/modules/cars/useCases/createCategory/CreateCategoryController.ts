import type { Request, Response } from 'express'
import type { Category } from '../../models/Category'
import type { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Category>> {
    const { name, description } = req.body
    const category = await this.createCategoryUseCase.execute({ name, description })
    return res.status(201).json(category)
  }
}
