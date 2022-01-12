import { AppError } from '../../../errors/AppError'

export function notFoundErrorHandling() {
  throw new AppError('Unable to find the requested resource', 404)
}
