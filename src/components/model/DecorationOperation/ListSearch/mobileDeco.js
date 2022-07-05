import React, { useEffect, useState } from 'react'
import { HtSearch } from '@/components'
const { useRequest } = HtSearch
import { Table } from 'antd'
import { serialNumber } from '@/utils/model/public/common'
import { mobileDecoList } from '@/api/admin/system'

const searchData = [
  {
    label: '专题名称',
    name: 'name'
  }
]

class TableData {
  constructor(item) {
    this.data = [
      {
        title: '序号',
        dataIndex: 'decoId',
        align: 'center',
        render: (text, record, index) => {
          return serialNumber({ index }, item.getSerialNumberData())
        }
      },
      { title: '专题名称', dataIndex: 'name', align: 'center' },
      { title: '创建时间', dataIndex: 'createTime', align: 'center' },
      { title: '修改时间', dataIndex: 'updateTime', align: 'center' }
    ]
  }
}

const rowKey = 'decoId'
let paginationData = {
  pageSize: '',
  current: ''
}
const defaultParams = { type: 'topic' }
const View = (props) => {
  const { run, Pagination, loading } = useRequest(mobileDecoList, {
    onSuccess(item) {
      paginationData = item?.data?.pagination
      setDataSource(item?.data?.list || [])
    },
    defaultParams
  })

  function getSerialNumberData() {
    return paginationData
  }
  const [dataSource, setDataSource] = useState([])
  const [columns] = useState(new TableData({ getSerialNumberData }).data)
  const [searchColumns] = useState(searchData)
  const [checked, setChecked] = useState(props.checked)

  useEffect(() => {
    run()
  }, [])

  return (
    <div className="select-table">
      <HtSearch
        loading={loading}
        columns={searchColumns}
        onSearch={run}
        onClear={run}
        col={12}
      />
      <Table
        className="list-table"
        style={{ height: '100%', flex: '1', overflow: 'auto' }}
        rowKey={rowKey}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        rowClassName={(record) => {
          return record[rowKey] === checked ? 'checked-row' : ''
        }}
        bordered
        onRow={(record) => {
          return {
            onClick: () => {
              setChecked(record[rowKey])
              if (props.onClick) {
                props.onClick(record, rowKey)
              }
            } // 点击行
          }
        }}
      />
      <Pagination />
    </div>
  )
}

export default View
