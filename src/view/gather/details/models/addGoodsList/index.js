import React, { useEffect, useMemo } from 'react'
import { Button, Table } from 'antd'
import { useState } from 'react'
import AddGoods from '../addGoods'
import { clone } from 'ramda'
import { TableData } from './utils'
import { deepClone, isTrue, useStateClassOperate } from '@/uitls'

const View = (props) => {
  const { setFun } = useStateClassOperate(rowOperate)
  const [columns] = useState(new TableData({ setFun, props }).data)
  const [showAddGoods, setShowAddGoods] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [selectedRows, setSelectedRows] = useState({})
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  useEffect(() => {
    if (props.onChange) {
      props.onChange({ selectedRowKeys, selectedRows })
    }
  }, [selectedRowKeys, selectedRows])

  const columnsData = useMemo(() => {
    const data = deepClone(columns || [])
    if (props.sortType) {
      data.pop()
    }
    return data
  }, [props.sortType])

  useEffect(() => {
    const propsSelectedRowKeys = props.value?.selectedRowKeys || []
    if (
      JSON.stringify(selectedRowKeys) === JSON.stringify(propsSelectedRowKeys)
    ) {
      return
    }
    setSelectedRows(deepClone(props.value?.selectedRows || {}))
    setSelectedRowKeys(deepClone(props.value?.selectedRowKeys || []))
    initSelectedRowData({
      selectedRowKeys: props.value?.selectedRowKeys,
      selectedRows: props.value?.selectedRows
    })
  }, [props.value])

  // useEffect(() => {
  //   const selectedRows = {}
  //   data.forEach((res) => {
  //     selectedRowKeys.push(res.goodsId)
  //     selectedRows[res.goodsId] = res
  //   })
  //   initSelectedRowData({ selectedRowKeys, selectedRows })
  // }, [])

  function addGoodsOnOk(value) {
    initSelectedRowData(value)
  }

  function initSelectedRowData(value) {
    if (!isTrue(value.selectedRowKeys || [])) return
    setSelectedRowKeys(clone(value.selectedRowKeys))
    const data = clone(value.selectedRows)
    const list = []
    const objectData = {}
    const dataLength = value.selectedRowKeys.length
    value.selectedRowKeys.forEach((res, index) => {
      list.push({ ...data[res], index: index + 1, dataLength })
      objectData[res] = data[res]
    })
    setSelectedRows(clone(objectData))
    setDataSource(clone(list))
  }

  function rowOperate(type, record) {
    const index = record.index
    const selectedRowKeys = dataSource.map((item) => item.goodsId)
    let data = ''
    switch (type) {
      case 'top':
        data = selectedRowKeys[index - 1]
        selectedRowKeys.splice(index - 1, 1)
        selectedRowKeys.unshift(data)
        break
      case 'up':
        data = selectedRowKeys[index - 2]
        selectedRowKeys[index - 2] = selectedRowKeys[index - 1]
        selectedRowKeys[index - 1] = data
        break
      case 'down':
        data = selectedRowKeys[index]
        selectedRowKeys[index] = selectedRowKeys[index - 1]
        selectedRowKeys[index - 1] = data
        break
      case 'delete':
        selectedRowKeys.splice(index - 1, 1)
        break
    }
    initSelectedRowData({ selectedRowKeys, selectedRows })
  }

  return (
    <div>
      <div>
        <Button>??????????????????</Button>
        <Button>??????????????????</Button>
        <Button
          onClick={() => {
            setShowAddGoods(true)
          }}
        >
          ????????????
        </Button>
      </div>
      <div>?????????????????????????????????????????????????????????????????????????????????????????????</div>
      <Table
        columns={columnsData}
        dataSource={dataSource}
        pagination={{
          size: 'small',
          showSizeChanger: true,
          showQuickJumper: true
        }}
        rowKey="goodsId"
        bordered
      />
      {showAddGoods && (
        <AddGoods
          onOk={addGoodsOnOk}
          idsNotIn={selectedRowKeys.join(',')}
          selectedRows={selectedRows}
          selectedRowKeys={selectedRowKeys}
          onCancel={setShowAddGoods}
        />
      )}
    </div>
  )
}

export default View
