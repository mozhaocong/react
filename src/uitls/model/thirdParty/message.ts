import { curry } from 'ramda'
import { message } from 'antd'
import { throttle } from '@/uitls'

export function curryMessage(type: string, data: string) {
  if (type === 'error') {
    message.error(data)
  } else if (type === 'warning') {
    message.warning(data)
  } else if (type === 'success') {
    message.success(data)
  }
}

const messageA = curry(curryMessage)
export const messageError = throttle(messageA('error'))
export const messageWarning = throttle(messageA('warning'))
export const messageSuccess = throttle(messageA('success'))
