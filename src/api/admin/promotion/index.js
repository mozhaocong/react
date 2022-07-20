import { get, post } from '@/http'
import { apiUrl } from '@/api'

export function getPromotionCollectionsList(data = {}, options = {}) {
  return get(apiUrl + '/v3/promotion/admin/collections/list', data, options)
}
export function getPromotionCollectionsDetail(data = {}, options = {}) {
  return get(apiUrl + '/v3/promotion/admin/collections/detail', data, options)
}
export function getPromotionCollectionsGoodsSequence(data = {}, options = {}) {
  return get(
    apiUrl + '/v3/promotion/admin/collections/goodsSequence',
    data,
    options
  )
}
