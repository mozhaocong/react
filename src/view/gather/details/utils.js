import React from 'react'
import { FormConfig, FormRadio, UploadImg } from '@/components'
export class FromData {
  constructor(item) {
    this.data = [
      {
        label: '集合类型',
        name: 'null1',
        component() {
          return <FormRadio prop="gatherType" />
        }
      },
      { label: '标题', name: 'null2' },
      {
        label: 'banner',
        name: 'null3',
        component() {
          return <UploadImg />
        }
      },
      { label: 'app描述', name: 'null4' },
      {
        label: '默认排序',
        name: 'null5',
        component() {
          return <FormConfig prop="gatherSort" onChange={item.sortChange} />
        }
      }
    ]
  }
}

export class SearchData {
  constructor() {
    this.data = [
      { label: '积分价值1', name: 'age2' },
      { label: '积分价值2', name: 'age2' }
    ]
  }
}
