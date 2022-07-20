import React, { useEffect, useState } from 'react'
import { TableData } from './utils'
import { Table } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { HtSearch } from '@/components'
import { getMemberPointQuery } from '@/api/admin/member'
const { useRequest } = HtSearch

const ViewTest = (props) => {
  let navigate = useNavigate()
  let location = useLocation()
  const [dataSource, setDataSource] = useState()
  const [columns] = useState(new TableData({ showClick, editClick }).data)
  const { run, loading } = useRequest(getMemberPointQuery, {
    onSuccess(item) {
      setDataSource(item?.data || [])
    }
  })
  function showClick(item) {
    console.log(item)
  }
  function editClick(item) {
    console.log(item)
    const id = item.id
    navigate(`/integral/details?id=${id}`)
  }
  useEffect(() => {
    run()
  }, [])
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        rowKey={'id'}
        pagination={false}
      />
    </div>
  )
}

export default ViewTest
