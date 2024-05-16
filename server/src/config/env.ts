import dotenv from 'dotenv'

dotenv.config()

export const env = {
  PORT: Number(process.env?.PORT ?? 3000),
  DOCS: (process.env?.DOCS === undefined ? 'true' : process.env.DOCS) === 'true'
}
