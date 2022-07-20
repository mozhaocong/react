import { isString, isTrue } from '@/utils'

let uuid = 0
export function setUploadImgData(url) {
  if (!isTrue(url) || !isString(url)) return {}
  uuid++
  const data = {
    fileList: [{ uid: uuid, name: url, status: 'done', url: url }],
    img_info: { path: url, url: url }
  }
  return data
}

export function getUploadImgData(data = {}) {
  console.log(data)
  const { img_info = {} } = data
  return img_info.url
}
