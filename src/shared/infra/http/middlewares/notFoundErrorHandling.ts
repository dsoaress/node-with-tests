import { NextFunction, Request, Response } from 'express'

export function notFoundErrorHandling(_req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    status: 404,
    error: 'Unable to find the requested resource',
    timestamp: new Date().toISOString()
  })

  next()
}
