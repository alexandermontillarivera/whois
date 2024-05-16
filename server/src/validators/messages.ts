type TypesData = 'string' | 'number' | 'date' | 'boolean' | 'base64' | 'object'

export default {
  required: (options: { state?: number } = { state: 400 }) =>
    `Required | ${String(options.state)}`,
  type: (
    { state = 400, type, array = false }: {
      type: TypesData
      array?: boolean
      state?: number
    }
  ) =>
    array
      ? `The typeof is not array of ${type} | ${state}`
      : `The typeof is not a ${type} | ${state}`,
  length: (
    { max, min, state = 400 }: { min: number, max: number, state?: number }
  ) => `The minimum length is ${min} and maximum ${max} | ${state}`,
  exist: ({ data, state = 409 }: { data: object, state?: number }) =>
    `The ${Object.keys(data)[0]} of value ${
      String(Object.values(data)[0])
    } exist in application | ${state}`,
  empty: (options: { state?: number } = { state: 400 }) =>
    `Required | ${String(options.state)}`,
  isNot: ({ state = 400, value }: { state?: number, value: 'email' | 'url' }) =>
    `Is not a ${value} | ${state}`,
  pattern: ({ state = 400, pattern }: { state?: number, pattern: string }) =>
    `The value sending does not follow the following pattern: [${pattern}] | ${state}`,
  custom: ({ state = 400, message }: { message: string, state?: number }) =>
    `${message} | ${state}`,
  mongoId: (params: { state?: number } = { state: 400 }) => `The id is not a mongoId | ${params.state}`
}
