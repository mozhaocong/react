import React, { useEffect, useMemo, useState } from 'react'
import { HtSearch, Image } from '@/components'
const { useRequest } = HtSearch
import { Modal, Table } from 'antd'
import { goodsList } from '@/api/admin/goods'
import { clone } from 'ramda'

const searchData = [
  { label: '商品名称', name: 'goodsName' },
  { label: '商品id', name: 'goodsName' },
  { label: '分类', name: 'goodsName' }
]

class TableData {
  constructor(item) {
    this.data = [
      {
        title: '商品名称',
        dataIndex: 'mainImage',
        align: 'center',
        render: (text) => {
          return <Image style={{ width: '80px', height: '80px' }} url={text} />
        }
      },
      { title: '商品状态', dataIndex: 'goodsName', align: 'center' },
      { title: '最低价', dataIndex: 'goodsPrice', align: 'center' }
    ]
  }
}

const rowKey = 'goodsId'

const View = (props) => {
  const { run, Pagination, loading } = useRequest(goodsList, {
    onSuccess(item) {
      setDataSource(item?.data?.list || [])
    }
  })

  const [dataSource, setDataSource] = useState([])
  const [columns] = useState(new TableData().data)
  const [searchColumns] = useState(searchData)
  const [selectedRows, setSelectedRows] = useState(props.selectedRows || {})
  const [selectedRowKeys, setSelectedRowKeys] = useState(
    props.selectedRowKeys || []
  )
  const rowSelection = useMemo(() => {
    return {
      selectedRowKeys,
      onChange: rowSelectionChange
    }
  }, [selectedRowKeys])

  function rowSelectionChange(value, item) {
    const data = clone(selectedRows)
    item.forEach((res) => {
      if (!data[res[rowKey]]) {
        data[res[rowKey]] = res
      }
    })
    setSelectedRows(data || {})
    setSelectedRowKeys(value)
  }

  useEffect(() => {
    run()
  }, [])

  function onCancel() {
    if (props.onCancel) {
      props.onCancel(false)
    }
  }
  function onOk() {
    if (props.onOk) {
      props.onOk({
        selectedRows,
        selectedRowKeys
      })
    }
    onCancel()
    // console.log('selectedRows', selectedRows)
    // console.log('selectedRowKeys', selectedRowKeys)
  }
  return (
    <Modal
      title="选择商品"
      width={1200}
      onCancel={onCancel}
      visible={true}
      onOk={onOk}
    >
      <div className="select-table">
        <HtSearch
          loading={loading}
          columns={searchColumns}
          onSearch={run}
          onClear={run}
          col={6}
        />
        <Table
          rowSelection={rowSelection}
          className="list-table"
          rowKey={rowKey}
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          bordered
        />
        <Pagination />
      </div>
    </Modal>
  )
}

export default View
