import { businessOptObject } from '@/config'

export function filterBusinessOptObject(key: string, item: string) {
  // @ts-ignore
  return businessOptObject[key][item * 1] || item
}
