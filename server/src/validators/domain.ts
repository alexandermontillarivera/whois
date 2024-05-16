import validator from './config'
import { isValidDomain } from './handlers'
import { param } from 'express-validator'
import { acceptedDnsTypes } from '@data/dns'
import messages from './messages'

export const validateDomain = [
  param('domain')
    .exists().withMessage(messages.required())
    .isString().withMessage(messages.type({ type: 'string' }))
    .custom((value: string) => {
      if (!isValidDomain(value)) {
        throw new Error(messages.custom({ message: 'Invalid domain' }))
      }
      return true
    })
    .toLowerCase(),
  validator
]

export const validateDnsType = [
  param('type')
    .exists().withMessage(messages.required())
    .isString().withMessage(messages.type({ type: 'string' }))
    .toUpperCase()
    .custom((value: string) => {
      const isAccepted: boolean = acceptedDnsTypes.includes(value)
      if (!isAccepted) {
        throw new Error(messages.custom({ message: `Invalid dns type. Accepted: ${acceptedDnsTypes.join(', ')}` }))
      }
      return true
    }),
  validator
]
