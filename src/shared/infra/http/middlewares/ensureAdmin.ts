import { NextFunction, Request, Response } from 'express'

import { AppError } from '@/shared/errors/AppError'

export function ensureAdmin(req: Request, _res: Response, next: NextFunction) {
  if (!req.user.admin) throw new AppError('Forbidden', 403)
  return next()
}
