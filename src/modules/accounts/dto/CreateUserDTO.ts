export type CreateUserDTO = {
  name: string
  email: string
  password: string
  avatar?: string
  driver_license: string
  admin?: boolean
}
