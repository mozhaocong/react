import { Button, Switch } from 'antd'
import React from 'react'
import { Image } from '@/components'
import { filterBusinessOptObject } from '@/uitls'
export class SearchData {
  constructor() {
    this.data = []
  }
}
export class TableData {
  constructor(item) {
    this.data = [
      {
        title: '积分行为',
        dataIndex: 'behaviorType',
        align: 'center',
        render(text) {
          return filterBusinessOptObject('integralType', text)
        }
      },
      { title: '积分价值', dataIndex: 'pointValue', align: 'center' },
      { title: '行为名称', dataIndex: 'behaviorName', align: 'center' },
      {
        title: '图标',
        dataIndex: 'addressByName',
        align: 'center',
        render(text) {
          return <Image url={text} />
        }
      },
      { title: '排序', dataIndex: 'sort', align: 'center' },
      {
        title: '是否显示',
        dataIndex: 'show',
        align: 'center',
        render(text, res) {
          return (
            <Switch onChange={(e) => item.showClick(e, res)} checked={!!text} />
          )
        }
      },
      { title: '编辑时间', dataIndex: 'updateTime', align: 'center' },
      { title: '编辑人员', dataIndex: 'updateUser', align: 'center' },
      {
        title: '操作',
        dataIndex: 'address7',
        align: 'center',
        render(text, res) {
          return (
            <Button
              type="link"
              onClick={() => {
                item.editClick(res)
              }}
            >
              编辑
            </Button>
          )
        }
      }
    ]
  }
}
