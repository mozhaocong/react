import { get } from '@/http'
export function goodsList(data = {}, options = {}) {
  return get('/v3/goods/admin/goods/list', data, options)
}
