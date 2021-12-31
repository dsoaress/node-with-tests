import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase'

export class ImportCategoriesController {
  async handle(req: Request, res: Response) {
    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)
    const result = await importCategoriesUseCase.execute(req.file)
    return res.status(201).json(result)
  }
}
