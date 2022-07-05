import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { getCateTree } from '@/api/admin/goods'

class TableData {
  constructor() {
    this.data = [{ title: '分类名称', dataIndex: 'categoryName' }]
  }
}

const rowKey = 'categoryId'

const View = (props) => {
  const [dataSource, setDataSource] = useState([])
  const [columns] = useState(new TableData({}).data)
  const [checked, setChecked] = useState(props.checked)
  const [loading, setLoading] = useState(false)
  const [upData, setUpData] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCateTree({ pId: 0, grade: 3 }).then((data) => {
      setDataSource(data?.data || [])
      setLoading(false)
      setUpData(false)
    })
  }, [])

  useEffect(() => {
    if (!upData) {
      setUpData(true)
    }
  }, [upData])

  return (
    <div className="select-table">
      {upData && (
        <Table
          loading={loading}
          defaultExpandAllRows={true}
          className="list-table"
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
      )}
    </div>
  )
}

export default View
