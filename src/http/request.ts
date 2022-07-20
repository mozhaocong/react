import { isTrue } from '@/utils'

export function setConfigHeaders(): ObjectMap {
  const data = window.localStorage.getItem('sld_token')
  return isTrue(data) ? { authorization: `Bearer ${data}` } : {}
}
