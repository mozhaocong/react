import { Button, Switch } from 'antd'
import React from 'react'
export class TableData {
  constructor(item) {
    this.data = [
      { title: '积分行为', dataIndex: 'name', align: 'center' },
      { title: '积分价值', dataIndex: 'age', align: 'center' },
      { title: '行为名称', dataIndex: 'address1', align: 'center' },
      { title: '图标', dataIndex: 'address2', align: 'center' },
      { title: '排序', dataIndex: 'address3', align: 'center' },
      {
        title: '是否显示',
        dataIndex: 'address4',
        align: 'center',
        render({ text }) {
          console.log(text)
          return <Switch onChange={item.showClick} />
        }
      },
      { title: '编辑时间', dataIndex: 'address5', align: 'center' },
      { title: '编辑人员', dataIndex: 'address6', align: 'center' },
      {
        title: '操作',
        dataIndex: 'address7',
        align: 'center',
        render({}) {
          return (
            <Button type="link" onClick={item.editClick}>
              编辑
            </Button>
          )
        }
      }
    ]
  }
}
