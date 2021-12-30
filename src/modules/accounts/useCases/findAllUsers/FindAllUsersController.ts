import { container } from 'tsyringe'

import { FindAllUsersUseCase } from './FindAllUsersUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'

export class FindAllUsersController {
  async handle(_req: Request, res: Response): Promise<Response<User[]>> {
    const findAllUsersUseCase = container.resolve(FindAllUsersUseCase)
    const users = await findAllUsersUseCase.execute()
    return res.json(users)
  }
}
