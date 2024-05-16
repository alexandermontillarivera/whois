import type { Request, Response } from 'express'
import { formatDns } from '@utils/format'
import type { DNS } from '@contracts/DNS'
import { setError, setResponse } from '@utils/api'
import whoiser from 'whoiser'
import dns from 'dns/promises'
import { type AnyRecord } from 'dns'

export const getDomainInformation = async (req: Request, res: Response) => {
  const domain = req.params.domain

  try {
    const result = await whoiser(domain)
    const data = result['whois.verisign-grs.com'] as Record<string, any>
    const servers: string[] = data['Name Server'].map((server: string) => server.toLowerCase())
    const createAt: string = data['Created Date']
    const updateAt: string = data['Updated Date']
    const expireAt: string = data['Expiry Date']
    const domainName: string = data['Domain Name'].toLowerCase()
    const registrar: string = data.Registrar
    const registrarAbuseContactEmail: string = data['Registrar Abuse Contact Email']
    const registrarAbuseContactPhone: string = data['Registrar Abuse Contact Phone']
    const registrarIanaId = Number(data['Registrar IANA ID'])

    return setResponse(res, {
      servers,
      createAt,
      updateAt,
      expireAt,
      domainName,
      registrar,
      registrarAbuseContactEmail,
      registrarAbuseContactPhone,
      registrarIanaId
    })
  } catch (error) {
    return setError(res, {
      location: 'params',
      msg: 'domain not found',
      param: 'domain',
      state: 404,
      value: domain
    })
  }
}

export const getDomainDNS = async (req: Request, res: Response) => {
  const domain = req.params.domain

  let result: AnyRecord[] = []

  try {
    result = await dns.resolveAny(domain)
  } catch (error) {
    return setError(res, {
      location: 'params',
      msg: 'domain not found',
      param: 'domain',
      state: 404,
      value: domain
    })
  }

  const formattedData = result.reduce((acc: Record<string, any>, curr) => {
    const type = curr.type

    const data = formatDns(curr)

    acc[type] = [
      ...acc[type] ?? [],
      data
    ]

    return acc
  }, {})

  return setResponse(res, formattedData)
}

export const getDomainDNSByType = async (req: Request, res: Response) => {
  const domain = req.params.domain
  const type = req.params.type as DNS

  try {
    const result = await dns.resolve(domain, type) as AnyRecord | AnyRecord[]

    const isMatrix = (elemet: any[]) => {
      return elemet.some((element) => Array.isArray(element))
    }

    const data = Array.isArray(result) && isMatrix(result) ? result.flat() : result

    return setResponse(res, data)
  } catch (error) {
    return setError(res, {
      location: 'params',
      msg: 'domain not found',
      param: 'domain',
      state: 404,
      value: domain
    })
  }
}
