import type { Request, Response } from 'express'
import type { Specification } from '../../models/Specification'
import type { FindAllSpecificationsUseCase } from './FindAllSpecificationsUseCase'

export class FindAllSpecificationsController {
  constructor(private findAllSpecificationsUseCase: FindAllSpecificationsUseCase) {}

  async handle(_req: Request, res: Response): Promise<Response<Specification[]>> {
    const specifications = await this.findAllSpecificationsUseCase.execute()
    return res.json(specifications)
  }
}
