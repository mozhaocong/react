import React, { useEffect, useState } from 'react'
import { HtSearch, Image } from '@/components'
const { useRequest } = HtSearch
import { Table } from 'antd'
import { goodsList } from '@/api/admin/goods'
import { serialNumber } from '@/utils/model/public/common'

const searchData = [
  {
    label: '商品名称',
    name: 'integralType'
  },
  {
    label: '商品名称',
    name: 'integralType'
  },
  {
    label: '商品名称',
    name: 'integralType'
  },
  {
    label: '商品名称',
    name: 'integralType'
  },
  {
    label: '商品名称',
    name: 'integralType'
  },
  {
    label: '商品名称',
    name: 'integralType'
  }
]

class TableData {
  constructor(item) {
    this.data = [
      {
        title: '序号',
        dataIndex: 'name',
        align: 'center',
        render: (text, record, index) => {
          return serialNumber({ index }, item.getSerialNumberData())
        }
      },
      {
        title: '商品图片',
        dataIndex: 'mainImage',
        align: 'center',
        render: (text) => {
          return <Image style={{ width: '80px' }} url={text} />
        }
      },
      { title: '商品名称', dataIndex: 'goodsName', align: 'center' },
      { title: '商品价格(美元)', dataIndex: 'goodsPrice', align: 'center' },
      { title: '销量', dataIndex: 'actualSales', align: 'center' }
    ]
  }
}

const rowKey = 'goodsId'
let paginationData = {
  pageSize: '',
  current: ''
}
const View = (props) => {
  const { run, Pagination, loading } = useRequest(goodsList, {
    onSuccess(item) {
      paginationData = item?.data?.pagination
      setDataSource(item?.data?.list || [])
    }
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
      />
      <Table
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
                props.onClick(record)
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
