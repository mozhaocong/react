import React, { useState } from 'react'
import { SearchData, TableData } from './utils'
import { Table } from 'antd'
import { mockDataSource } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { HtSearch } from '@/components'
import { goodsList } from '@/api/admin/goods'
const { useRequest } = HtSearch

const ViewTest = (props) => {
  let navigate = useNavigate()
  const [dataSource, setDataSource] = useState(
    mockDataSource(new TableData().data)
  )
  const [columns] = useState(new TableData({ showClick, editClick }).data)
  const [searchColumns] = useState(new SearchData().data)

  const { run, Pagination, loading } = useRequest(goodsList, {
    onSuccess(item) {
      setDataSource(item?.data?.list || [])
    }
  })
  function showClick(item) {
    console.log(item)
  }
  function editClick() {
    navigate('details')
  }

  return (
    <div>
      <HtSearch
        loading={loading}
        columns={searchColumns}
        onSearch={run}
        onClear={run}
      />
      <Table
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        rowKey={'id'}
      />
      <Pagination />
    </div>
  )
}

export default ViewTest
