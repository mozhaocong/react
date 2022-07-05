import { get } from '@/http'
import { apiUrl } from '@/api'
export function mobileDecoList(data = {}, options = {}) {
  return get(apiUrl + '/v3/system/admin/mobileDeco/list', data, options)
}
