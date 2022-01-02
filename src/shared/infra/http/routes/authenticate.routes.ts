import { Router } from 'express'

import { AuthenticateUserController } from '@/accounts/useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenController } from '@/accounts/useCases/refreshToken/RefreshTokenController'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const authenticateRouter = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

// public route
authenticateRouter.post('/', authenticateUserController.handle)

// private route
authenticateRouter.post('/refresh-token', ensureAuthenticated, refreshTokenController.handle)

export { authenticateRouter }
