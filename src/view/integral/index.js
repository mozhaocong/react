import React, { useEffect, useState } from 'react'
import { TableData } from './utils'
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HtSearch } from '@/components'
import { getMemberPointQuery, postMemberPointUpdate } from '@/api/admin/member'
import { messageSuccess } from '@/utils'
const { useRequest } = HtSearch

const ViewTest = () => {
  let navigate = useNavigate()
  const [dataSource, setDataSource] = useState()
  const [columns] = useState(new TableData({ showClick, editClick }).data)
  const { run, loading, setLoading } = useRequest(getMemberPointQuery, {
    onSuccess(item) {
      setDataSource(item?.data || [])
    }
  })
  async function showClick(key, item) {
    setLoading(true)
    const data = await postMemberPointUpdate({ ...item, show: key ? 1 : 0 })
    setLoading(false)
    if (data.state == 200) {
      run()
      messageSuccess(data.msg)
    }
  }
  function editClick(item) {
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
