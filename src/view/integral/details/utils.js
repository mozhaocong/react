import React from 'react'
import { FormConfig } from '@/components'
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
      { label: '显示图标', name: 'null4' },
      { label: '链接', name: 'null5' },
      { label: '排序', name: 'null6' },
      { label: '积分上限类型', name: 'null8' },
      { label: '是否显示', name: 'null9' }
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
