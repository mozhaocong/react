import { isTrue } from '@/utils'

export function setConfigHeaders(): ObjectMap {
  localStorage.setItem(
    'authorization',
    'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsImV4cCI6MTY1NjkyNjgyMSwidXVpZCI6Ijk5MGViZjQyLTU0OTktNGJiYi1iYjI2LTViOTI1MGQ2NDg3ZiIsIndlYklkZW50aWZ5IjoiYWRtaW4ifQ.GQ4OAIByZ431bJyCEEtDcx_mZUgAmemrM_VZJqy5DwiVPC1XMpqGCg8Fv9hDTPUUDIuFQRGS8umky8rht1pWZJ7ktR7jGxTHieOG49BhohxqJSM9gt4W8uuUgw_DQiuT_d0Vq6AV-FM1f5FixVkxM87d4qgXH7IOOH_pi4fB77D2Yjx77EjO7L9_ozgVG7dBQa7u6Qzsd4YzvHkf44QpVoJBV9KE3eKKYRKRdwRM5Kopwtz-VcnqTCC2uwF5TplGLeEBXt1A5s2-EcRbOZ66FuP8rFXFOQMfwnsdXVshfW3KjN8Nemv0SjphBDysG0T6MsOEuACycVEst74eePr-Ig'
  )
  const data = window.localStorage.getItem('authorization')
  return isTrue(data) ? { authorization: data } : {}
}
