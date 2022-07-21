import React, { useEffect, useState } from 'react'
import { SearchData, TableData } from './utils'
import { Table } from 'antd'
import { mockDataSource } from '@/uitls'
import { useNavigate } from 'react-router-dom'
import { HtSearch } from '@/components'
import { getPromotionCollectionsList } from '@/api/admin/promotion'
const { useRequest } = HtSearch

const ViewTest = (props) => {
  let navigate = useNavigate()
  const [dataSource, setDataSource] = useState(
    mockDataSource(new TableData().data)
  )
  const [columns] = useState(new TableData({ showClick, editClick }).data)
  const [searchColumns] = useState(new SearchData().data)

  const { run, Pagination, loading } = useRequest(getPromotionCollectionsList, {
    onSuccess(item) {
      console.log(item?.data?.list)
      setDataSource(item?.data?.list || [])
    }
  })
  function showClick(item) {
    console.log(item)
  }
  function editClick(res, type) {
    const collectionId = res.collectionId
    navigate(`/gather/details?collectionId=${collectionId}&type=${type}`)
  }

  useEffect(() => {
    run()
  }, [])
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
