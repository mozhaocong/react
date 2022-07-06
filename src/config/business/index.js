import { forEach, keys } from 'ramda'
import integral from './integral'
import gather from './gather'

export const businessOptObject = {
  ...integral,
  ...gather,
  baseYesNoStatus: {
    0: '否',
    1: '是'
  },
  baseStatus: {
    0: '禁用',
    1: '启用'
  },
  baseEffective: {
    0: '有效',
    1: '失效'
  }
}

function getOptions(data) {
  const _obj = {}
  forEach((key) => {
    const list = []
    const item = data[key]
    forEach((key) => {
      const a = Number(key)
      list.push({
        value: isNaN(a) ? key : a,
        label: item[key]
      })
    }, keys(item))
    _obj[key] = list
  }, keys(data))
  return _obj
}
export const configBusinessDataOptions = getOptions(businessOptObject)
