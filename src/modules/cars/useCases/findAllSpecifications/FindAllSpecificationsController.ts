import { container } from 'tsyringe'

import { FindAllSpecificationsUseCase } from './FindAllSpecificationsUseCase'

import type { Request, Response } from 'express'
import type { Specification } from '../../entities/Specification'

export class FindAllSpecificationsController {
  async handle(_req: Request, res: Response): Promise<Response<Specification[]>> {
    const findAllSpecificationsUseCase = container.resolve(FindAllSpecificationsUseCase)
    const specifications = await findAllSpecificationsUseCase.execute()
    return res.json(specifications)
  }
}
