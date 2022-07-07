import { oauthToken } from '@/api/admin/oauth/index.js'
import axios from 'axios'
import { isTrue } from '@/utils'

export async function resAsyncSuccess(response: ObjectMap) {
  switch (response.data.state) {
    case 401:
      const item = await refreshToken()
      if (item) {
        const data = await axios(response.config)
        return data
      }
      break
  }
  return response
}

async function refreshToken() {
  const token = localStorage.getItem('sld_refresh_token')
  if (!token) return false
  const res = await oauthToken(
    { refreshToken: token },
    { 'Content-Type': 'application/x-www-form-urlencoded' }
  )
  if (res?.state * 1 === 200) {
    localStorage.setItem('authorization', `Bearer ${res?.data?.access_token}`)
    localStorage.setItem('sld_refresh_token', `${res?.data?.refresh_token}`)
    return true
  }
  return false
}

const initRefreshToken = false
const list = []
function testList() {
  return new Promise((resolve) => {
    resolve(true)
  })
}

async function testListRefreshToken() {
  if (initRefreshToken) {
    return new Promise((resolve) => {
      function callback(value: any) {
        resolve(value)
      }
    })
  } else {
    return await refreshToken()
  }
}
