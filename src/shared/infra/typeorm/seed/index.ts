import { createCars } from './cars'
import { createUsers } from './users'

async function main() {
  await createUsers()
  await createCars()
}

main().catch(error => console.log(error))
