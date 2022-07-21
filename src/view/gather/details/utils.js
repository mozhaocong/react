import React from 'react'
import { FormConfig, FormRadio, UploadImg } from '@/components'
import { Input } from 'antd'
const { TextArea } = Input
export class FromData {
  constructor(item) {
    this.data = [
      {
        label: '集合类型',
        name: 'type',
        component() {
          return <FormRadio prop="gatherType" />
        }
      },
      { label: '标题', name: 'title' },
      {
        label: 'banner',
        name: 'banner',
        component() {
          return <UploadImg />
        }
      },
      {
        label: 'app描述',
        name: 'description',
        component() {
          return <TextArea />
        }
      },
      {
        label: '默认排序',
        name: 'sort',
        component() {
          return <FormConfig prop="gatherSort" onChange={item.setFun} />
        }
      }
    ]
  }
}

// export class SearchData {
//   constructor() {
//     this.data = [
//       { label: '积分价值1', name: 'age2' },
//       { label: '积分价值2', name: 'age2' }
//     ]
//   }
// }
