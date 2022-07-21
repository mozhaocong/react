import { isString, isTrue } from '@/uitls'

let uuid = 0
export function setUploadImgData(path, url) {
  if (!isTrue(path) || !isString(path)) return {}
  uuid++
  const data = {
    fileList: [{ uid: uuid, name: path, status: 'done', url: url }],
    img_info: { path: path, url: url }
  }
  return data
}

export function getUploadImgData(data = {}, keyMap = {}) {
  console.log(data)
  const { img_info = {} } = data
  return { [keyMap.path]: img_info.path, [keyMap.url]: img_info.url }
}
