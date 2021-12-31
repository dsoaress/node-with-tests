import { Router } from 'express'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenController } from '../modules/accounts/useCases/refreshToken/RefreshTokenController'

const authenticateRouter = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticateRouter.post('/', authenticateUserController.handle)
authenticateRouter.post('/refresh-token', ensureAuthenticated, refreshTokenController.handle)

export { authenticateRouter }
