import { isTrue } from '@/utils'

export function setConfigHeaders(): ObjectMap {
  localStorage.setItem(
    'authorization',
    'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsImV4cCI6MTY1NjY3Mzg5NywidXVpZCI6IjM4ZTExNWMzLTg5YjAtNGYwMS05YzE4LTJhYWI2YTczNmZkYSIsIndlYklkZW50aWZ5IjoiYWRtaW4ifQ.rNRVKHW-pxiOkmzedDM5V86ZDcSsyo73U9WRMoj9MwbUJic2HU3JDYhKQS8S6RmFNkSx08V4u4wf8FgMYwsltWteloK1VykPxWikdQtw0bEMOCLdAlhF2AdqwvVcsitiBjWzCetnKUOEE12X0G_yHbOKZ-K6k6w2ObxiKoAKyW039Ye1-Z2bdcG7oNsSV-bO9AV7QsLvy9GmF7f4vNLn5XRmmVAFsMc1chpaNvPiZseGoyykZIhDoPiT-WF__AakA0uGSK5NqoU_gqNvHpkkypuoGGn8Uq4zUTtKS7jElMNN2SK-U4mNJwNyIuIe1xRLg1yj3PiArG1PTM86BX1YRw'
  )
  const data = window.localStorage.getItem('authorization')
  return isTrue(data) ? { authorization: data } : {}
}
