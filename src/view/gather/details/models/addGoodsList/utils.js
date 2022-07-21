import React from 'react'
import { Button } from 'antd'
import { Image } from '@/components'

export class TableData {
  constructor(item) {
    this.data = [
      { title: '序号', dataIndex: 'index', align: 'center', width: '150px' },
      {
        title: '商品图片',
        dataIndex: 'mainImage',
        align: 'center',
        width: '150px',
        render: (text) => {
          return (
            <Image
              style={{ width: '80px', height: '80px', margin: 'auto' }}
              url={text}
            />
          )
        }
      },
      {
        title: '商品名称',
        dataIndex: 'goodsName',
        align: 'center',
        width: '150px'
      },
      {
        title: '商品状态',
        dataIndex: 'stateValue',
        align: 'center',
        width: '150px'
      },
      {
        title: '最低价',
        dataIndex: 'goodsPrice',
        align: 'center',
        width: '150px'
      },
      {
        title: '操作',
        dataIndex: 'null4',
        align: 'center',
        width: '150px',
        render: (text, record) => {
          const { index, dataLength } = record
          return (
            <div>
              <Button
                disabled={index === 1 || item.props.sortType}
                type="link"
                onClick={() => {
                  item.setFun('top', record)
                }}
              >
                置顶
              </Button>
              <Button
                disabled={index === 1}
                type="link"
                onClick={() => {
                  item.setFun('up', record)
                }}
              >
                上移
              </Button>
              <Button
                disabled={index === dataLength}
                type="link"
                onClick={() => {
                  item.setFun('down', record)
                }}
              >
                下移
              </Button>
              <Button
                type="link"
                onClick={() => {
                  item.setFun('delete', record)
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
