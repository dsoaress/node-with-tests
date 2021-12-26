import type { Request, Response } from 'express'
import type { Category } from '../../models/Category'
import type { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'

export class FindAllCategoriesController {
  constructor(private findAllCategoriesUseCase: FindAllCategoriesUseCase) {}

  async handle(_req: Request, res: Response): Promise<Response<Category[]>> {
    const categories = await this.findAllCategoriesUseCase.execute()
    return res.json(categories)
  }
}
