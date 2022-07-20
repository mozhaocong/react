import { get, post } from '@/http'
import { apiUrl } from '@/api'

export function getMemberPointQuery(data = {}, options = {}) {
  return get(apiUrl + '/v3/member/admin/point/query', data, options)
}

export function getMemberPointId(data = {}, options = {}) {
  return get(apiUrl + '//v3/member/admin/point/query-by-id', data, options)
}

export function postMemberPointUpdate(data = {}, options = {}) {
  return post(apiUrl + '/v3/member/admin/point/update', data, options)
}
