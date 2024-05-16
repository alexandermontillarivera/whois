import type { ErrorApi } from '@contracts/Error'
import type { Response } from 'express'

export const setError = (res: Response, { location, msg, param, state, value }: Partial<ErrorApi>) => {
  return res.status(state ?? 400).json({
    errors: [
      {
        location,
        msg,
        param,
        value,
        state: state ?? 400
      }
    ],
    success: false
  })
}

export const setResponse = (res: Response, data: any, msg: string = 'Data obtained correctly') => {
  return res.status(200).json({
    data,
    success: true,
    msg
  })
}
