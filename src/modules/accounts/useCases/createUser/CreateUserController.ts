import { container } from 'tsyringe'

import { CreateUserUseCase } from './CreateUserUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'
import type { CreateUserDTO } from '../../dto/CreateUserDTO'

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response<User>> {
    const { name, email, password, driverLicense } = req.body as CreateUserDTO
    const createUserUseCase = container.resolve(CreateUserUseCase)
    const user = await createUserUseCase.execute({ name, email, password, driverLicense })
    return res.status(201).json(user)
  }
}
