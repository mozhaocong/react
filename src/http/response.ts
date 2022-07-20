import { oauthToken } from '@/api/admin/oauth/index.js'
import axios from 'axios'
import { EventBus } from '@/utils'
let initRefreshToken = false
const eventBus = new EventBus()
export async function resAsyncSuccess(response: ObjectMap) {
  switch (response.data.state) {
    case 401:
      const item = await EventBusRefreshToken()
      if (item) {
        const data = await axios(response.config)
        return data
      }
      break
  }
  return response
}

// 节流，多个接口同时token过期，就通过队列回调信息更新token
async function EventBusRefreshToken() {
  if (initRefreshToken) {
    return new Promise((resolve) => {
      const uuid = eventBus.on('refreshToken', callback)
      function callback(value: any) {
        eventBus.remove('refreshToken', uuid)
        resolve(value)
      }
    })
  } else {
    initRefreshToken = true
    const data = await refreshToken()
    eventBus.emit('refreshToken', data)
    initRefreshToken = false
    return data
  }
}

// 更新token
async function refreshToken() {
  const token = localStorage.getItem('sld_refresh_token')
  if (!token) return false
  const res: any = await oauthToken(
    { refreshToken: token },
    { 'Content-Type': 'application/x-www-form-urlencoded' }
  )
  if (res?.state * 1 === 200) {
    localStorage.setItem('sld_token', `${res?.data?.access_token}`)
    localStorage.setItem('sld_refresh_token', `${res?.data?.refresh_token}`)
    return true
  }
  return false
}
