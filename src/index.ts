import { env } from './config/env'
import { app } from './shared/infra/http/server'
import { createTypeormConnection } from './shared/infra/typeorm'

createTypeormConnection()
  .then(() => {
    console.log('🔧 Typeorm connection created')
    app.listen(env.PORT, () => console.log(`🚀 Server is running on port ${env.PORT}`))
  })
  .catch(error => console.log(error))
