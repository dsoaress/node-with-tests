import { NextFunction, Request, Response } from 'express'

import { AppError } from '../../../errors/AppError'

export function appErrorHandling(error: Error, _req: Request, res: Response, next: NextFunction) {
  if (error instanceof AppError) {
    res.status(error.status).json(error)
  } else {
    res.status(500).json({
      status: 500,
      error: error.message,
      timestamp: new Date().toISOString(),
      details: error
    })
  }

  next()
}
