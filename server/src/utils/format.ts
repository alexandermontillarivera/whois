import { type AnyRecord } from 'dns'

export const formatDns = (record: AnyRecord) => {
  const { type } = record

  if (type === 'A') {
    return {
      address: record.address,
      ttl: record.ttl
    }
  }

  if (type === 'AAAA') {
    return {
      address: record.address,
      ttl: record.ttl
    }
  }

  if (type === 'CNAME') {
    return record.value
  }

  if (type === 'TXT') {
    return record.entries[0]
  }

  if (type === 'MX') {
    return {
      exchange: record.exchange,
      priority: record.priority
    }
  }

  if (type === 'NS') {
    return record.value
  }

  if (type === 'PTR') {
    return record.value
  }

  if (type === 'SRV') {
    return {
      name: record.name,
      port: record.port,
      priority: record.priority,
      weight: record.weight
    }
  }

  return {
    ...record,
    type: undefined
  }
}
