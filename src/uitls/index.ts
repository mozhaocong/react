import { throttle, debounce, EventBus } from './model/public/common'
import {
  ArrayKeyToMap,
  ArrayKeyToObject,
  ArrayObjectIncludes,
  ObjectToArray,
  forArrayData,
  setArrayData,
  setObjetToObject,
  setArrayFilter,
  deepClone,
  arrayGetData
} from './model/public/data'
import {
  isString,
  isObject,
  isArray,
  isFunction,
  isNumber,
  isTrue
} from './model/public/typeJudgment'

import {
  messageError,
  messageSuccess,
  messageWarning
} from './model/thirdParty/message'

import { mockDataSource } from './model/mock/index.js'

import { getToken } from './model/admin/utils.js'
import { useStateClassOperate } from './model/reactHook/index.js'
export {
  arrayGetData,
  throttle,
  debounce,
  ArrayObjectIncludes,
  ObjectToArray,
  isObject,
  isArray,
  ArrayKeyToObject,
  setObjetToObject,
  setArrayFilter,
  isTrue,
  ArrayKeyToMap,
  forArrayData,
  setArrayData,
  isFunction,
  deepClone,
  isString,
  isNumber,
  messageError,
  messageSuccess,
  messageWarning,
  mockDataSource,
  getToken,
  useStateClassOperate,
  EventBus
}

export { filterBusinessOptObject } from './model/filter'
