import { Router } from 'express'
import { pong } from '@controllers/service/webService'

const router = Router()

router.all('/ping', pong)

export default router
