import express from 'express'
import { docsDir, publicDir } from '@/constants'
import { env } from '@config/env'
import morgan from 'morgan'
import childProcess from 'child_process'
import fs from 'fs'
import cors from 'cors'

const server = express()

if (env.DOCS && !fs.existsSync(docsDir)) {
  childProcess.execSync('npm run docs:build')
}

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(publicDir))
server.use(morgan('dev'))

if (env.DOCS) {
  server.use(express.static(docsDir))
}

export default server
