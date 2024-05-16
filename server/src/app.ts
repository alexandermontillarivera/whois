import 'module-alias/register'
import colors from 'colors'
import server from '@/server'
import { env } from '@config/env'
import domainRoutes from '@routes/v1/domain'
import webServiceRoutes from '@routes/service/webService'
import { notFoundHandle } from '@handlers/api'

server.use('/api/v1/domain', domainRoutes)
server.use('/api', webServiceRoutes)
server.use(notFoundHandle)

server.listen(env.PORT, () => {
  console.log(colors.yellow(`[SERVER]: listening in http://localhost:${env.PORT}`))
})
