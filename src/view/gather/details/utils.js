import React from 'react'
import { FormConfig, FormRadio, UploadImg } from '@/components'
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
      { label: 'app描述', name: 'seoDescription' },
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

const data = {
  shopifyUrl: 'https://shop.luvmehair.com/collections/80-cash-off',
  shopifyId: 262204981338,
  seoDescription: null,
  banner: '/images/promotion/collections/202206/HMRKuDwi7t6vVqqRP7X.jpg',
  description:
    '<img src="https://cdn.shopify.com/s/files/1/2465/8681/files/Collection_2_480x480.jpg?v=1631495483" alt="" data-mce-fragment="1" data-mce-src="https://cdn.shopify.com/s/files/1/2465/8681/files/Collection_2_480x480.jpg?v=1631495483">',
  updateTime: '2022-06-27 09:56:14',
  source: 2,
  sort: 1,
  title: '$80 Cash Off',
  type: 1,
  seoTitle: null,
  operator: null,
  collectionGoodsVOs: null,
  createTime: '2022-07-15 11:03:13',
  collectionId: 82,
  operatorId: null
}
