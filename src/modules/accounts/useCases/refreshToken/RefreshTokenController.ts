import { container } from 'tsyringe'

import { RefreshTokenUseCase } from './RefreshTokenUseCase'

import type { Request, Response } from 'express'
import type { User } from '../../entities/User'

export class RefreshTokenController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response<User & { token: string; refreshToken: string }>> {
    const { id } = req.user
    const { refreshToken } = req.body
    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase)
    const result = await refreshTokenUseCase.execute(id, refreshToken)
    return res.json(result)
  }
}
