import path from 'path'

export const rootDir = path.resolve(__dirname, '..')
export const docsDir = path.join(rootDir, 'docs', 'build')
export const notFoundHTMLPath = path.join(docsDir, '404.html')
export const publicDir = path.join(rootDir, 'public')
