import type { ImportCategoriesUseCase } from './ImportCategoriesUseCase'
import type { Category } from '../../models/Category'
import type { Request, Response } from 'express'

export class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<Category[]>> {
    const categories = await this.importCategoriesUseCase.execute(req.file)
    return res.status(201).json(categories)
  }
}
