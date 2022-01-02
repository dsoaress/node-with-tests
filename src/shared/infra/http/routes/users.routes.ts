import { Router } from 'express'

import { CreateUserController } from '@/accounts/useCases/createUser/CreateUserController'
import { DeleteUserController } from '@/accounts/useCases/deleteUser/DeleteUserController'
import { FindAllUsersController } from '@/accounts/useCases/findAllUsers/FindAllUsersController'
import { FindUserController } from '@/accounts/useCases/findUser/FindUserController'
import { UpdateUserController } from '@/accounts/useCases/updateUser/UpdateUserController'
import { UpdateUserAvatarController } from '@/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { upload } from '@/config/upload'

import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ensureUser } from '../middlewares/ensureUser'

const usersRouter = Router()

const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserController = new FindUserController()
const updateUserController = new UpdateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()
const deleteUserController = new DeleteUserController()

// public route
usersRouter.post('/', createUserController.handle)

// private routes
usersRouter.use(ensureAuthenticated, ensureUser)
usersRouter.get('/', ensureAdmin, findAllUsersController.handle)
usersRouter.get('/:id', findUserController.handle)
usersRouter.patch('/:id', updateUserController.handle)
usersRouter.patch('/update-avatar/:id', upload, updateUserAvatarController.handle)
usersRouter.delete('/:id', deleteUserController.handle)

export { usersRouter }
