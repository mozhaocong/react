import { isTrue } from '@/utils'

export function setConfigHeaders(): ObjectMap {
  localStorage.setItem(
    'authorization',
    'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsImV4cCI6MTY1Njc1MjY0OSwidXVpZCI6IjY2OWUwZmEyLTc2MGMtNGE5OC1hNGRmLTRiMTNmNDNiYTkzNCIsIndlYklkZW50aWZ5IjoiYWRtaW4ifQ.hSMRY0DOLR34fb8aHJaRhoGYHV4r_q0AUa-ug3aV3mMDyaPMNGdItGOvP2VNVugGFyhTigAw6Fhj-fEft7ydPmg_ecBT1gJghCM5lbytQUEkyjJ-JNYt44M_FzqsdroTL7DH2M_B67hV7IGeLOG9hVjlMh9RsU2ADhqsdGsHyCB-xL52Mq8egLk5ItRWHVo8pLA6c2wY9hR-pAzBuyJ4kduWknHRws-mf-o-2DKMSZ8W0juzNd7swQ5O3uUTunOLynlDqrpB5SHJhpmO43NLf4u-AxyIRk3lQz2xpfOIQDEzwBCR2Ru7tSIECU8t0uzGC_n0CZTAfHpyqik6TXqGgw'
  )
  const data = window.localStorage.getItem('authorization')
  return isTrue(data) ? { authorization: data } : {}
}
