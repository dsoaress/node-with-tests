import { container } from 'tsyringe'

import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'

import type { Request, Response } from 'express'
import type { Category } from '../../entities/Category'

export class FindAllCategoriesController {
  async handle(_req: Request, res: Response): Promise<Response<Category[]>> {
    const findAllCategoriesUseCase = container.resolve(FindAllCategoriesUseCase)
    const categories = await findAllCategoriesUseCase.execute()
    return res.json(categories)
  }
}
