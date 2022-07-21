import { isTrue } from '@/uitls'

export function setFormDefValue(row, data) {
  const returnData = {}
  row.forEach((item) => {
    if (!isTrue(item.name) || !isTrue(data[item.name])) return
    returnData[item.name] = data[item.name]
  })
  return returnData
}
