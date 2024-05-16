import { Router } from 'express'
import * as controllers from '@controllers/v1/domain'
import { validateDomain, validateDnsType } from '@validators/domain'

const router = Router()

router.get('/:domain', validateDomain, controllers.getDomainInformation)
router.get('/:domain/dns', validateDomain, controllers.getDomainDNS)
router.get('/:domain/dns/:type', validateDomain, validateDnsType, controllers.getDomainDNSByType)

export default router
