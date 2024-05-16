---
icon: telescope
---

# Domain API

## Introduction

The domain information is a service that allows you to obtain information about a domain. 

## Endpoints

The domain information service has the following endpoints:

### Get domain information

This endpoint allows you to obtain the information of a domain, name servers, creation date, update date, expiration date, domain name, registrar, registrar abuse contact email, registrar abuse contact phone and registrar IANA ID.

[!badge text="GET"] `/api/v1/domain/:domain`

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| domain | string | Domain name |

#### Sucesss example

URL: `/api/v1/domain/google.com`

```json
HTTP/1.1 200 OK
{
  "data": {
    "servers": [
      "ns1.google.com",
      "ns2.google.com",
      "ns3.google.com",
      "ns4.google.com"
    ],
    "createAt": "1997-09-15T04:00:00Z",
    "updateAt": "2019-09-09T15:39:04Z",
    "domainName": "google.com",
    "registrar": "MarkMonitor Inc.",
    "registrarAbuseContactEmail": "abusecomplaints@markmonitor.com",
    "registrarAbuseContactPhone": "+1.2086851750",
    "registrarIanaId": 292
  },
  "success": true,
  "msg": "Data obtained correctly"
}
```
#### Not found error example 

```json
HTTP/1.1 404 Not Found
{
  "errors": [
    {
      "location": "params",
      "msg": "domain not found",
      "param": "domain",
      "value": "fakedomainapi.com",
      "state": 404
    }
  ]
}
```

#### Invalid params error example

```json
HTTP/1.1 400 Bad Request
{
  "errors": [
    {
      "value": "fakedomainapi",
      "param": "domain",
      "location": "params",
      "msg": "Invalid domain",
      "state": 400
    }
  ]
}
```

#### Response information

| Name | Type | Description |
| --- | --- | --- |
| data | object | Domain information |
| data.servers | array | Domain servers |
| data.createAt | string | Domain registration date |
| data.updateAt | string | Domain last update date |
| data.expireAt | string | Domain expiration date |
| data.domainName | string | Domain name |
| data.registrar | string | Domain registrar |
| data.registrarAbuseContactEmail | string | Domain registrar abuse contact email |
| data.registrarAbuseContactPhone | string | Domain registrar abuse contact phone |
| data.registrarIanaId | number | Domain registrar IANA ID |
| success | boolean | Indicates if the request was successful |
| msg | string | Message of the request |

!!! Note
The .ch domains always return 404, the whoiser package in the documentation indicates that it is not compatible with .ch domains in server side, but it does not return any error, it simply returns 404.
!!!

### Get domain DNS

This endpoint allows you to obtain the DNS information of a domain, the keys of the data object are the DNS record types and the values are the DNS records.

[!badge text="GET"] `/api/v1/domain/:domain/dns`

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| domain | string | Domain name |

#### Sucesss example

URL: `/api/v1/domain/google.com/dns`

```json
HTTP/1.1 200 OK
{
  "data": {
      "A": [
        {
          "address": "2607:f8b0:4002:c02::8a",
          "ttl": 168
        }
      ],
      "NS": [
        "ns1.google.com",
      ],
      "SOA": [
        {
          "nsname": "ns1.google.com",
          "hostmaster": "dns-admin.google.com",
          "serial": 592507334,
          "refresh": 900,
          "retry": 900,
          "expire": 1800,
          "minttl": 60
        }
      ]
  },
  "success": true,
  "msg": "Data obtained correctly"
}

```
#### Not found error example 

```json
HTTP/1.1 404 Not Found
{
  "errors": [
    {
      "location": "params",
      "msg": "domain not found",
      "param": "domain",
      "value": "fakedomainapi.com",
      "state": 404
    }
  ]
}
```

#### Invalid params error example

```json
HTTP/1.1 400 Bad Request
{
  "errors": [
    {
      "value": "fakedomainapi",
      "param": "domain",
      "location": "params",
      "msg": "Invalid domain",
      "state": 400
    }
  ]
}
```

#### Response information

| Name | Type | Description |
| --- | --- | --- |
| data | object | Domain DNS information, the keys of the data object are the DNS record types and the values are the DNS records |
| success | boolean | Indicates if the request was successful |
| msg | string | Message of the request |

!!! Note
Testing the api I realized that node at a certain time with the dns module does not return any dns, apparently with the domains in cloudflare is being blocked with a certain number of requests, in this case, the api returns empty object. 
!!!


### Get domain DNS by type

This endpoint allows you to obtain the DNS information of a domain by type, the keys of the data object are the DNS record types and the values are the DNS records.

[!badge text="GET"] `/api/v1/domain/:domain/dns/:type`

Only accepts the following types: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| domain | string | Domain name |
| type | string | DNS record type |

#### Success example

URL: `/api/v1/domain/google.com/dns/A`

```json
HTTP/1.1 200 OK
{
  "data": [
    "74.125.138.101",
    "74.125.138.138",
    "74.125.138.102",
    "74.125.138.100",
    "74.125.138.113",
    "74.125.138.139"
  ],
  "success": true,
  "msg": "Data obtained correctly"
}
```

#### Not found error example 

```json
HTTP/1.1 404 Not Found
{
  "errors": [
    {
      "location": "params",
      "msg": "domain not found",
      "param": "domain",
      "value": "fakedomainapi.com",
      "state": 404
    }
  ]
}
```

#### Invalid type error example

```json
HTTP/1.1 400 Bad Request
{
  "errors": [
    {
      "value": "INVALID",
      "param": "type",
      "location": "params",
      "msg": "Invalid dns type. Accepted: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT",
      "state": 400
    }
  ]
}
```

#### Invalid params error example

#### Information of the response

| Name | Type | Description |
| --- | --- | --- |
| data | array | Domain DNS information |
| success | boolean | Indicates if the request was successful |
| msg | string | Message of the request |
