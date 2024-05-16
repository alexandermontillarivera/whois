export const isValidDomain = (domain: string) => {
  const regex = /^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/
  return regex.test(domain)
}
