import { get } from '@/http'
import { apiUrl } from '@/api'

export function getMemberPointQuery(data = {}, options = {}) {
  return get(apiUrl + '/v3/member/admin/point/query', data, options)
}
