import { Router } from 'express'
import { NextFunction, Request, Response } from 'express'

import { upload } from '../../../../config/upload'
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController'
import { DeleteUserController } from '../../../../modules/accounts/useCases/deleteUser/DeleteUserController'
import { FindAllUsersController } from '../../../../modules/accounts/useCases/findAllUsers/FindAllUsersController'
import { FindUserController } from '../../../../modules/accounts/useCases/findUser/FindUserController'
import { UpdateUserController } from '../../../../modules/accounts/useCases/updateUser/UpdateUserController'
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { AppError } from '../../../errors/AppError'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const usersRouter = Router()

const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserController = new FindUserController()
const updateUserController = new UpdateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()
const deleteUserController = new DeleteUserController()

export function ensureUser(req: Request, _res: Response, next: NextFunction) {
  const hasPermission = req.user.id === req.params.id || req.user.admin
  if (!hasPermission) throw new AppError('Forbidden', 403)
  next()
}

// public route
usersRouter.post('/', createUserController.handle)

// private routes
usersRouter.use(ensureAuthenticated)
usersRouter.get('/:id', ensureUser, findUserController.handle)
usersRouter.patch('/:id', ensureUser, updateUserController.handle)
usersRouter.patch('/update-avatar/:id', ensureUser, upload, updateUserAvatarController.handle)
usersRouter.delete('/:id', ensureUser, deleteUserController.handle)

// admin only routes
usersRouter.get('/', ensureAdmin, findAllUsersController.handle)

export { usersRouter }
