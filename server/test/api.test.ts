import { expect, test, describe } from 'vitest'
import { env } from '../src/config/env'

const url = `http://localhost:${env.PORT}/api/v1`
const testDomain = 'google.com'
const fakeDomain = 'fakedomainapi.com'
const invalidTypeDns = 'invalid'
const invalidDomain = 'google'
const dataKeysDomainInfo = [
  'servers',
  'createAt',
  'updateAt',
  'expireAt',
  'domainName',
  'registrar',
  'registrarAbuseContactEmail',
  'registrarAbuseContactPhone',
  'registrarIanaId'
]
const dnsKeysDomain = [
  'A',
  'AAAA',
  'MX',
  'NS',
  'SOA'
]

describe('Domain information API endpoint', () => {
  test('Should return a 200 status code', async () => {
    const response = await fetch(`${url}/domain/${testDomain}`)
    expect(response.status).toBe(200)
  })

  test('Should return a 404 status code', async () => {
    const response = await fetch(`${url}/domain/${fakeDomain}`)
    expect(response.status).toBe(404)
  })

  test('Should return a 400 status code', async () => {
    const response = await fetch(`${url}/domain/${invalidDomain}`)
    expect(response.status).toBe(400)
  })

  test('Should return a data object with the correct keys', async () => {
    const response = await fetch(`${url}/domain/${testDomain}`)
    const result = await response.json()
    expect(Object.keys(result.data)).toEqual(dataKeysDomainInfo)
  })
})

describe('Domain DNS API endpoint', () => {
  test('Should return a 200 status code', async () => {
    const response = await fetch(`${url}/domain/${testDomain}/dns`)
    expect(response.status).toBe(200)
  })

  test('Should return a 404 status code', async () => {
    const response = await fetch(`${url}/domain/${fakeDomain}/dns`)
    expect(response.status).toBe(404)
  })

  test('Should return a 400 status code', async () => {
    const response = await fetch(`${url}/domain/${invalidDomain}/dns`)
    expect(response.status).toBe(400)
  })

  test('Should return a data object with the correct keys', async () => {
    const response = await fetch(`${url}/domain/${testDomain}/dns`)
    const result = await response.json()
    expect(Object.keys(result.data)).toEqual(dnsKeysDomain)
  })
})

describe('Domain DNS by type API endpoint', () => {
  test('Should return a 200 status code', async () => {
    const response = await fetch(`${url}/domain/${testDomain}/dns/A`)
    expect(response.status).toBe(200)
  })

  test('Should return a 404 status code', async () => {
    const response = await fetch(`${url}/domain/${fakeDomain}/dns/A`)
    expect(response.status).toBe(404)
  })

  test('Should return a 400 status code', async () => {
    const response = await fetch(`${url}/domain/${invalidDomain}/dns/A`)
    expect(response.status).toBe(400)
  })

  test('Should return a 400 status code', async () => {
    const response = await fetch(`${url}/domain/${testDomain}/dns/${invalidTypeDns}`)
    expect(response.status).toBe(400)
  })

  test('Should return a data array data strings', async () => {
    const response = await fetch(`${url}/domain/${testDomain}/dns/A`)
    const result = await response.json()
    expect(result.data.every((element: any) => typeof element === 'string')).toBe(true)
  })
})
