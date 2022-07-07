import { post } from '@/http'
import { apiUrl } from '@/api'

export function oauthToken(data = {}, options = {}) {
  return post(apiUrl + '/v3/adminLogin/admin/oauth/token', data, options)
}
