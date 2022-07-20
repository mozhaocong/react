import { Button, Switch } from 'antd'
import React from 'react'
export class SearchData {
  constructor() {
    this.data = []
  }
}
export class TableData {
  constructor(item) {
    this.data = [
      { title: '积分行为', dataIndex: 'null', align: 'center' },
      { title: '积分价值', dataIndex: 'pointValue', align: 'center' },
      { title: '行为名称', dataIndex: 'behaviorName', align: 'center' },
      { title: '图标', dataIndex: 'address', align: 'center' },
      { title: '排序', dataIndex: 'sort', align: 'center' },
      {
        title: '是否显示',
        dataIndex: 'show',
        align: 'center',
        render(res) {
          return <Switch onChange={item.showClick} checked={!!res} />
        }
      },
      { title: '编辑时间', dataIndex: 'updateTime', align: 'center' },
      { title: '编辑人员', dataIndex: 'updateUser', align: 'center' },
      {
        title: '操作',
        dataIndex: 'address7',
        align: 'center',
        render() {
          return <Button type="link">编辑</Button>
        }
      }
    ]
  }
}
