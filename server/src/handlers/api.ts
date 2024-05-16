import { notFoundHTMLPath } from '@/constants'
import { type Request, type Response } from 'express'
import fs from 'fs'

export const notFoundHandle = (req: Request, res: Response) => {
  const acceptHTML = req.accepts('html')
  const existsHTML = fs.existsSync(notFoundHTMLPath)

  if (acceptHTML && existsHTML && !req.url.startsWith('/api')) {
    res.status(404).sendFile(notFoundHTMLPath)
  } else {
    res.status(404).json({
      message: 'Not found route'
    })
  }
}
