import React, { createRef, useState } from 'react'
import { DecorationOperation, HtSearch } from '@/components'
const { useRequest } = HtSearch
import { FromData, SearchData } from '@/view/integral/details/utils'
import { Button } from 'antd'
import { goodsList } from '@/api/admin/goods'

const View = (props) => {
  function showClick(item) {
    console.log(item)
  }
  const formRef = createRef()
  const searchRef = createRef()
  const [columns] = useState(new FromData({ formRef }).data)
  const [searchColumns] = useState(new SearchData({ searchRef }).data)

  const { run, Pagination, loading } = useRequest(goodsList, {
    onSuccess() {
      console.log(1)
    }
  })

  return (
    <div>
      {/*<HtSearch*/}
      {/*  columns={searchColumns}*/}
      {/*  onSearch={(item) => {*/}
      {/*    console.log(item)*/}
      {/*    run(item)*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Pagination />*/}
      {/*<HtForm*/}
      {/*  columns={columns}*/}
      {/*  propsForm={(item) => {*/}
      {/*    formRef.current = item*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<GoodsList />*/}
      <DecorationOperation />
    </div>
  )
}

export default View
