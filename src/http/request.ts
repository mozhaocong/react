import { isTrue } from '@/utils'

export function setConfigHeaders(): ObjectMap {
  localStorage.setItem(
    'authorization',
    'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsImV4cCI6MTY1NzEwMjkxNSwidXVpZCI6IjkxMWM1MjZlLTcyYmQtNDkwZC1iYWIxLWViNzU2MWFhYjE2YyIsIndlYklkZW50aWZ5IjoiYWRtaW4ifQ.CkwcjqzKIF3rqQo94OmOLsrGbrcANtkeF-UGqm2vZ1VbEV2E4n5UtJoMq1B4j0zhYpQ70eJtuga_tdjc1eNgU30cSbYcmzRhnhD3dZOsNwUUJaut_gci6DE5ilpz5cCaMklXcbWGfZIB9JZWQNi58Hy_vA5tlqQJqwC_zQozY8_Byg5PHjw9U1X79cur1wn2mve3YQ9BPy46H9oLwb7zv3-G93Qy7JIc_V3WEWsECZbaSJzTwAv3w3ZBH5tlNMRzxhAlTbERwGenCZh0eJaFODeRaZdOwpRDnRfRHA2UBgO9ntx7qJSRRFLdAUknwbVTZaSf_cZsry49Io5NFeyC1w'
  )
  const data = window.localStorage.getItem('authorization')
  return isTrue(data) ? { authorization: data } : {}
}
