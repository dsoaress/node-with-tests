import { NextFunction, Request, Response } from 'express'

import { AppError } from '@/shared/errors/AppError'

export async function ensureUser(req: Request, _res: Response, next: NextFunction) {
  const paramId = req.params.id
  const isAuthenticatedUser = req.user.id === paramId
  const isAdmin = req.user.admin
  const hasPermission = isAuthenticatedUser || isAdmin

  if (!hasPermission) throw new AppError('Forbidden', 403)
  return next()
}
