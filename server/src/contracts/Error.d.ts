export interface ErrorApi {
  value: string
  param: string
  location: 'body' | 'query' | 'params' | 'headers'
  msg: string
  state: number
}
