import { validationResult } from 'express-validator'
import { type Request, type Response, type NextFunction } from 'express'

const validatorConfig = (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult.withDefaults({
      formatter: (err: any) => {
        const message = err.msg
        return {
          value: err.value,
          param: err.path,
          location: err.location,
          msg: String(message).split('|')[0].trim(),
          state: Number(String(message).split('|')[1])
        }
      }
    })
    errors(req).throw()
    next()
  } catch (error: any) {
    const stateCode: number = error.array()[0].state
    res.status(stateCode ?? 400).json({ errors: error.array() })
  }
}

const validator = (req: Request, res: Response, next: NextFunction) => {
  validatorConfig(req, res, next)
}

export default validator
