export type CreateUserDTO = {
  name: string
  email: string
  password: string
  avatar?: string
  driverLicense: string
  admin?: boolean
}
