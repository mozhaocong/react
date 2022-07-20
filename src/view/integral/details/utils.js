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
        name: 'behaviorType',
        component() {
          return <FormConfig prop="integralType" />
        }
      },
      { label: '积分价值', name: 'pointValue' },
      {
        label: '单笔订单最大赠送积分',
        name: 'maxPoints',
        display() {
          // 只有购物送积分显示
          return [3].includes(
            item.formRef?.current?.getFieldValue('integralType')
          )
        }
      },
      {
        label: '赠送次数上限',
        name: 'maxFrequency',
        display() {
          // 加购、收藏、分享、都是增加赠送次数上限字段，可以配置每日赠送的积分次数上限
          return [5, 6, 7].includes(
            item.formRef?.current?.getFieldValue('integralType')
          )
        }
      },
      { label: '行为名称', name: 'behaviorName' },
      {
        label: '显示图标',
        name: 'address',
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
      { label: '排序', name: 'sort' },
      {
        label: '积分上限类型',
        name: 'frequencyType',
        component() {
          return <FormRadio prop="integralLimit" />
        }
      },
      {
        label: '是否显示',
        name: 'show',
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

export const data = {
  address:
    'http://oss-dev.htwig.com/images/admin/setting/202207/vyGSYFYVNDh2kz8YrTY.jpg',
  maxFrequency: 1,
  show: 1,
  updateUser: 'admin',
  updateTime: '2022-07-20 10:31:06',
  sort: '1',
  type: 'points',
  url: '积分后管测试',
  behaviorName: '注册送积分',
  pointValue: 100,
  linkId: 19,
  maxPoints: 100,
  createTime: '2022-07-20 10:31:06',
  frequencyType: 0,
  createUser: 'admin',
  id: 4,
  behaviorType: 0,
  info: '{"goodsId":100002990002,"goodsPrice":221,"mainImgUrl":"http://mall-dev.app.htwig.com:32601/images/seller/goods/zd1mMxcHaJNQuVAPVfJ.png","defaultProductId":200003140002,"goodsName":"个人中心底部测试","actualSales":0}'
}
