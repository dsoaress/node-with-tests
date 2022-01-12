import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { env } from '../../../../config/env'
import { AppError } from '../../../errors/AppError'

export function ensureAuthenticated(req: Request, _res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    throw new AppError('Token not provided', 401)
  }

  const [, token] = req.headers.authorization.split(' ')

  try {
    const { sub: id, admin } = verify(token, env.JWT_SECRET) as { sub: string; admin: boolean }

    req.user = {
      id,
      admin
    }

    return next()
  } catch {
    throw new AppError('Invalid token', 401)
  }
}
