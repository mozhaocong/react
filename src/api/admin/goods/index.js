import { get } from '@/http'
import { apiUrl } from '@/api'

export function goodsList(data = {}, options = {}) {
  return get(apiUrl + '/v3/goods/admin/goods/list', data, options)
}

export function getCateTree(data = {}, options = {}) {
  return get(
    apiUrl + '/v3/goods/admin/goodsCategory/getCateTree',
    data,
    options
  )
}
