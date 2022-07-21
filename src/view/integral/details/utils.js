import React from 'react'
import {
  DecorationOperation,
  FormConfig,
  FormRadio,
  UploadImg
} from '@/components'
import { InputNumber, Switch } from 'antd'
export class FromData {
  constructor(item) {
    this.data = [
      {
        label: '积分行为类型',
        name: 'behaviorType',
        component() {
          return <FormConfig disabled={true} prop="integralType" />
        }
      },
      {
        label: '积分价值',
        name: 'pointValue',
        extra:
          '设置下单赠送积分比例。例如10，表示10美金赠送1积分，在订单确认收货后才赠送积分，取消订单则扣掉订单增加的积分。空或者0则为不赠送积分',
        component() {
          return <InputNumber min={0} />
        }
      },
      {
        label: '单笔订单最大赠送积分',
        name: 'maxPoints',
        extra: '限制单笔订单最大赠送积分，空或者0则为不限制',
        display() {
          // 只有购物送积分显示
          return [3].includes(
            item.formRef?.current?.getFieldValue('behaviorType') * 1
          )
        },
        component() {
          return <InputNumber min={0} />
        }
      },
      {
        label: '赠送次数上限',
        name: 'maxFrequency',
        extra: '每日加购赠送积分的次数上限，空或0表示不限制',
        display() {
          // 加购、收藏、分享、都是增加赠送次数上限字段，可以配置每日赠送的积分次数上限
          return [5, 6, 7].includes(
            item.formRef?.current?.getFieldValue('behaviorType') * 1
          )
        },
        component() {
          return <InputNumber min={0} />
        }
      },
      {
        label: '行为名称',
        name: 'behaviorName',
        extra: '设置前端显示的名称及积分记录名称'
      },
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
      {
        label: '排序',
        name: 'sort',
        extra: '输入0-255，值越大越靠前',
        component() {
          return <InputNumber min={0} max={255} />
        }
      },
      {
        label: '积分上限类型',
        name: 'frequencyType',
        component() {
          return <FormRadio disabled={true} prop="integralLimit" />
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
