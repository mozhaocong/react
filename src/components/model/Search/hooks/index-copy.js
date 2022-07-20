import Pagination from '../model/pagination.js'
import { useState } from 'react'
import { isObject, isTrue } from '@/utils'
const optionsDefData = {
  paginationReq: ['data', 'pagination'],
  paginationConfig: {
    current: 'current',
    pageSize: 'pageSize',
    total: 'total'
  },
  setPaginationParam: {
    current: 'current',
    pageSize: 'pageSize'
  }
}

export function useRequest(request, options = {}) {
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(1)
  const [total, setTotal] = useState('')
  const [param, setParam] = useState({})

  async function run(data = {}) {
    setLoading(true)
    setParam(data)
    const item = await request({ ...(options.defaultParams || {}), ...data })
    if (item.state == 200) {
      const optionsData = { ...optionsDefData, ...options }
      let paginationReqData = {}
      if (isTrue(optionsData.paginationReq)) {
        paginationReqData = item
        optionsData.paginationReq.forEach((res) => {
          try {
            paginationReqData = paginationReqData[res]
          } catch (e) {
            console.log('optionsData.paginationReq 数据不对')
            paginationReqData = {}
          }
        })
      }

      if (isTrue(paginationReqData) && isObject(paginationReqData)) {
        setCurrent(
          paginationReqData[optionsData?.paginationConfig?.current] ?? 1
        )
        setPageSize(
          paginationReqData[optionsData?.paginationConfig?.pageSize] ?? 1
        )
        setTotal(paginationReqData[optionsData?.paginationConfig?.total] ?? '')
      }
    }
    if (options.onSuccess) {
      options.onSuccess(item)
    }
    setLoading(false)
  }

  return {
    run,
    loading,
    current,
    pageSize,
    Pagination: () =>
      Pagination({
        current,
        pageSize,
        total,
        loading,
        onChange: (item) => {
          const optionsData = { ...optionsDefData, ...options }
          const itemParam = {
            ...param,
            [optionsData.setPaginationParam.current]: item.current,
            [optionsData.setPaginationParam.pageSize]: item.pageSize
          }
          run(itemParam)
        },
        onShowSizeChange: (item) => {
          const optionsData = { ...optionsDefData, ...options }
          const itemParam = {
            ...param,
            [optionsData.setPaginationParam.current]: item.current,
            [optionsData.setPaginationParam.pageSize]: item.pageSize
          }
          run(itemParam)
        }
      })
  }
}
