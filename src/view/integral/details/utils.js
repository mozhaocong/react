import React from 'react'
import {
  DecorationOperation,
  FormConfig,
  FormRadio,
  UploadImg
} from '@/components'
import { Switch } from 'antd'
export class FromData {
  constructor(item) {
    this.data = [
      {
        label: '积分行为类型',
        name: 'integralType',
        component() {
          return <FormConfig prop="integralType" />
        }
      },
      { label: '积分价值', name: 'age2' },
      {
        label: '单笔订单最大赠送积分',
        name: 'null1',
        display() {
          // 只有购物送积分显示
          return [3].includes(
            item.formRef?.current?.getFieldValue('integralType')
          )
        }
      },
      {
        label: '赠送次数上限',
        name: 'null2',
        display() {
          // 加购、收藏、分享、都是增加赠送次数上限字段，可以配置每日赠送的积分次数上限
          return [5, 6, 7].includes(
            item.formRef?.current?.getFieldValue('integralType')
          )
        }
      },
      { label: '行为名称', name: 'null3' },
      {
        label: '显示图标',
        name: 'null4',
        component() {
          return <UploadImg />
        }
      },
      {
        label: '',
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
        col: 24,
        name: 'decorationOperation',
        component() {
          return <DecorationOperation labelCol={8} wrapperCol={8} />
        }
      },
      { label: '排序', name: 'null6' },
      {
        label: '积分上限类型',
        name: 'null8',
        component() {
          return <FormRadio prop="integralLimit" />
        }
      },
      {
        label: '是否显示',
        name: 'null9',
        fieldDecoratorProps: { valuePropName: 'checked' },
        component() {
          return <Switch />
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
