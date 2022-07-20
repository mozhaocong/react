import { Button } from 'antd'
import React from 'react'
import { FormConfig } from '@/components'
import { businessOptObject } from '@/config'

export class SearchData {
  constructor() {
    this.data = [
      { label: '标题名称', name: 'title' },
      {
        label: '集合类型',
        name: 'type',
        component() {
          return <FormConfig prop="gatherType" />
        }
      },
      {
        label: '来源',
        name: 'source',
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
      {
        title: 'ID',
        dataIndex: 'collectionId',
        align: 'center',
        width: '150px'
      },
      { title: '标题', dataIndex: 'title', align: 'center', width: '150px' },
      {
        title: '集合类型',
        dataIndex: 'type',
        align: 'center',
        render(text) {
          return businessOptObject.gatherType[text] || ''
        },
        width: '150px'
      },
      {
        title: '选品条件',
        dataIndex: 'null2',
        align: 'center',
        width: '150px'
      },
      {
        title: '页面链接',
        dataIndex: 'shopifyUrl',
        align: 'center',
        width: '150px'
      },
      {
        title: '来源',
        dataIndex: 'source',
        align: 'center',
        width: '150px',
        render(text) {
          return businessOptObject.gatherSource[text] || ''
        }
      },
      {
        title: '编辑人员',
        dataIndex: 'operator',
        align: 'center',
        width: '150px'
      },
      {
        title: '编辑时间',
        dataIndex: 'updateTime',
        align: 'center',
        width: '150px'
      },
      {
        title: '操作',
        dataIndex: 'address7',
        align: 'center',
        width: '150px',
        render(test, res) {
          return (
            <div>
              <Button type="link" onClick={() => item.editClick(res, 'check')}>
                查看
              </Button>
              <Button type="link" onClick={() => item.editClick(res, 'edit')}>
                编辑
              </Button>
              <Button type="link" onClick={() => item.editClick(res, 'del')}>
                删除
              </Button>
            </div>
          )
        }
      }
    ]
  }
}
