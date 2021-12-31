import { env } from '@/config/env'
import { app } from '@/shared/infra/http/server'

app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`))
