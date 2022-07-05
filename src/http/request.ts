import { isTrue } from '@/utils'

export function setConfigHeaders(): ObjectMap {
  localStorage.setItem(
    'authorization',
    'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsImV4cCI6MTY1NzAyMDk1MCwidXVpZCI6ImI0MmZmNWI1LTIzN2EtNDQ4OS04ZWUzLWEwODU5ZjhhYWRlNyIsIndlYklkZW50aWZ5IjoiYWRtaW4ifQ.dQE-S6w1QM0Eqzpk56jtTTLjWDD1vv1ed8GdzbkcEC1iiJ7GPXyfxQl7CO6TZQCQsNP0Df2t1BdMonUnT-U6RS9Hy8AEkGbPuG1b9oxEfRTkF6YUuEBne_TWYA-B1mfhddu0ShZIgGXhYFoiS-DVeYiDYnUP6db38KmZqKaYn1tDol40q4py0geIr1dfHrjcf6BArmcgVml58j6LqwL4Rp_r50duIF2rjJwZJgFANEyrnJN425GFYTUEc7acTnQ0ybqlQDhFBvB4OrtbONjMRC26sx6RYIgA0g-KfIt2nstOLHhSD9X2jj2KQLK_kh6JH6_qpbYnmdIigRGSCHfDlg'
  )
  const data = window.localStorage.getItem('authorization')
  return isTrue(data) ? { authorization: data } : {}
}
