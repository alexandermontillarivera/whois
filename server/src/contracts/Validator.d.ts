import type { Request, Response, NextFunction } from 'express'

type Middleware = (req: Request, res: Response, next: NextFunction) => Promise<void>
