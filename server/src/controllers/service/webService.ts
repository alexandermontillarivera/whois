import type { Request, Response } from 'express'
import { setResponse } from '@utils/api'

export const pong = (_req: Request, res: Response) => {
  return setResponse(res, {
    message: 'pong'
  }, 'Web service is working')
}
