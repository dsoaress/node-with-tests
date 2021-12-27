import { container } from 'tsyringe'

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase'

import type { Request, Response } from 'express'
import type { Category } from '../../entities/Category'

export class ImportCategoriesController {
  async handle(req: Request, res: Response): Promise<Response<Category[]>> {
    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)
    const categories = await importCategoriesUseCase.execute(req.file)
    return res.status(201).json(categories)
  }
}
