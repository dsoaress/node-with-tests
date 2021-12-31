import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { FindAllUsersUseCase } from './FindAllUsersUseCase'

export class FindAllUsersController {
  async handle(_req: Request, res: Response) {
    const findAllUsersUseCase = container.resolve(FindAllUsersUseCase)
    const result = await findAllUsersUseCase.execute()
    return res.json(result)
  }
}
