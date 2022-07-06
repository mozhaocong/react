import React from 'react'
import { Button } from 'antd'

export class TableData {
  constructor(item) {
    this.data = [
      { title: '序号', dataIndex: 'id', align: 'center' },
      { title: '商品名称', dataIndex: 'goodsName', align: 'center' },
      { title: '商品状态', dataIndex: 'goodsName', align: 'center' },
      { title: '最低价', dataIndex: 'goodsPrice', align: 'center' },
      {
        title: '操作',
        dataIndex: 'null4',
        align: 'center',
        render: (text, record, index) => {
          return (
            <div>
              <Button
                onClick={() => {
                  item.rowOperate('top', index)
                }}
              >
                置顶
              </Button>
              <Button
                onClick={() => {
                  item.rowOperate('up', index)
                }}
              >
                上移
              </Button>
              <Button
                onClick={() => {
                  item.rowOperate('down', index)
                }}
              >
                下移
              </Button>
              <Button
                onClick={() => {
                  item.rowOperate('delete', index)
                }}
              >
                移除
              </Button>
            </div>
          )
        }
      }
    ]
  }
}
