import React, { useEffect, useState } from 'react'
import { isTrue } from '@/utils'

export function useStateClassOperate(data) {
  const [params, setParams] = useState('')
  const [upData, setUpData] = useState('')

  useEffect(() => {
    if (!upData) return
    if (!isTrue(params)) {
      data()
    } else {
      data(...params)
    }
  }, [upData])
  function setFun(...data) {
    console.log('setFun')
    setParams(data)
    setUpData(new Date().getTime())
  }
  return {
    setFun
  }
}
