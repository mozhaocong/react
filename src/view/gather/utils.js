import { Button } from 'antd'
import React from 'react'
import { FormConfig } from '@/components'

export class SearchData {
  constructor() {
    this.data = [
      { label: '商品名称', name: 'goodsName' },
      {
        label: '集合类型',
        name: 'type',
        component() {
          return <FormConfig prop="gatherType" />
        }
      },
      {
        label: 'source',
        name: 'goodsName',
        component() {
          return <FormConfig prop="gatherSource" />
        }
      }
    ]
  }
}

export class TableData {
  constructor(item) {
    this.data = [
      { title: 'ID', dataIndex: 'id', align: 'center' },
      { title: '标题', dataIndex: 'age', align: 'center' },
      { title: '集合类型', dataIndex: 'address1', align: 'center' },
      { title: '选品条件', dataIndex: 'address2', align: 'center' },
      { title: '页面链接', dataIndex: 'address3', align: 'center' },
      { title: '来源', dataIndex: 'address4', align: 'center' },
      { title: '编辑人员', dataIndex: 'address5', align: 'center' },
      { title: '编辑时间', dataIndex: 'address6', align: 'center' },
      {
        title: '操作',
        dataIndex: 'address7',
        align: 'center',
        render({}) {
          return (
            <div>
              <Button type="link" onClick={item.editClick}>
                查看
              </Button>
              <Button type="link" onClick={item.editClick}>
                编辑
              </Button>
              <Button type="link" onClick={item.editClick}>
                删除
              </Button>
            </div>
          )
        }
      }
    ]
  }
}
