import React, { useEffect, useState } from 'react'
import { TableData } from './utils'
import { Table } from 'antd'
import { mockDataSource } from '@/utils'
import { useNavigate, useLocation } from 'react-router-dom'
const ViewTest = (props) => {
  let navigate = useNavigate()
  let location = useLocation()
  const [dataSource, setDataSource] = useState(
    mockDataSource(new TableData().data)
  )
  const [columns] = useState(new TableData({ showClick, editClick }).data)
  function showClick(item) {
    console.log(item)
  }
  function editClick() {
    console.log(location)
    console.log('editClick')
    navigate('details')
  }
  useEffect(() => {
    console.log('new TableData().data', new TableData().data)
    console.log('mockDataSource', mockDataSource(new TableData().data))
  }, [])
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} rowKey={'name'} />
    </div>
  )
}

export default ViewTest
