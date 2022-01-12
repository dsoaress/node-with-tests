import { hashSync } from 'bcrypt'
import { getRepository } from 'typeorm'

import { UserEntity } from '../../../../modules/accounts/infra/typeorm/entities/UserEntity'
import { User } from '../../../../modules/accounts/models/User'
import { createTypeormConnection } from '../'

const ADMIN_USER_EMAIL = 'admin@admin.com'
const NORMAL_USER_EMAIL = 'user@user.com'
const PASSWORD = '12345678'

export async function createUsers() {
  const connection = await createTypeormConnection()
  const usersRepository = getRepository(UserEntity)

  const adminDefaultUser = await usersRepository.findOne({
    email: ADMIN_USER_EMAIL
  })

  const normalDefaultUser = await usersRepository.findOne({
    email: NORMAL_USER_EMAIL
  })

  if (!adminDefaultUser || !normalDefaultUser) {
    const adminUser = new User({
      name: 'Jane Doe',
      email: ADMIN_USER_EMAIL,
      password: hashSync(PASSWORD, 10),
      driverLicense: '1',
      admin: true
    })

    const normalUser = new User({
      name: 'John Doe',
      email: NORMAL_USER_EMAIL,
      password: hashSync(PASSWORD, 10),
      driverLicense: '1'
    })

    await usersRepository.save(adminUser)
    await usersRepository.save(normalUser)

    const result = `
      Admin user created
      email: ${ADMIN_USER_EMAIL}
      password: ${PASSWORD}

      Normal user created
      email: ${NORMAL_USER_EMAIL}
      password: ${PASSWORD}
    `

    console.log(result)
  }

  await connection.close()
}
