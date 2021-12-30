import { Router } from 'express'

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { DeleteUserController } from '../modules/accounts/useCases/deleteUser/DeleteUserController'
import { FindAllUsersController } from '../modules/accounts/useCases/findAllUsers/FindAllUsersController'
import { FindUserController } from '../modules/accounts/useCases/findUser/FindUserController'
import { UpdateUserController } from '../modules/accounts/useCases/updateUser/UpdateUserController'

const usersRouter = Router()

const createUserController = new CreateUserController()
const findAllUsersController = new FindAllUsersController()
const findUserController = new FindUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

usersRouter.post('/', createUserController.handle)
usersRouter.get('/', findAllUsersController.handle)
usersRouter.get('/:id', findUserController.handle)
usersRouter.patch('/:id', updateUserController.handle)
usersRouter.delete('/:id', deleteUserController.handle)

export { usersRouter }
