import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { RefreshTokenUseCase } from './RefreshTokenUseCase'

export class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const { id } = req.user
    const { refreshToken } = req.body
    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase)
    const result = await refreshTokenUseCase.execute(id, refreshToken)
    return res.json(result)
  }
}
