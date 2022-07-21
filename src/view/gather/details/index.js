import React, { useState } from 'react'
import { HtForm, UploadImg } from '@/components'
import { FromData } from './utils'
import { Button } from 'antd'
import AddGoodsList from './models/addGoodsList'
import {
  getPromotionCollectionsDetail,
  getPromotionCollectionsGoodsSequence
} from '@/api/admin/promotion'
import { useSearchParams } from 'react-router-dom'
import { isTrue, useStateClassOperate } from '@/uitls'
const { setFormDefValue } = HtForm

const { getUploadImgData, setUploadImgData } = UploadImg

const View = (props) => {
  function handleSubmit(item) {
    console.log(item)
    console.log(value)
  }
  const [formRef, setFormRef] = useState({})
  const { setFun } = useStateClassOperate(sortChange)

  const [searchParams] = useSearchParams()
  const [type, setType] = useState()
  const [columns] = useState(new FromData({ formRef, setFun }).data)
  const [goodsList, setGoodsList] = useState({})

  function sortChange() {
    goodsSequenceSort()
  }

  async function init() {
    const collectionId = searchParams.get('collectionId')
    setType(searchParams.get('type'))
    const res = await getPromotionCollectionsDetail({ collectionId })
    const data = res?.data || {}
    const banner = setUploadImgData(data.banner, data.bannerURL)
    const rowData = setFormDefValue(columns, { ...data, banner })
    console.log(rowData, formRef)
    formRef.setFieldsValue({ ...rowData })
  }

  async function goodsSequenceSort() {
    console.log('goodsList', goodsList)
    const { selectedRowKeys = [] } = goodsList
    if (!isTrue(selectedRowKeys)) return
    const goodsIds = selectedRowKeys.join(',')
    const sort = formRef.getFieldValue('sort')
    const data = await getPromotionCollectionsGoodsSequence({ goodsIds, sort })
    if (![200].includes(data.state)) return
    const item = data?.data || []
    console.log('item', item)
    const selectedRowKeysData = []
    const selectedRowsData = {}
    item.forEach((item) => {
      selectedRowKeysData.push(item.goodsId)
      selectedRowsData[item.goodsId] = item
    })
    console.log(selectedRowKeysData)
    setGoodsList({
      selectedRowKeys: selectedRowKeysData,
      selectedRows: selectedRowsData
    })
  }

  // useEffect(() => {}, [])
  return (
    <div>
      <HtForm
        handleSubmit={handleSubmit}
        fId="integralDetails"
        columns={columns}
        propsForm={(item) => {
          console.log()
          setFormRef(item)
          setTimeout(() => {
            init()
          }, 10)
        }}
      />
      {/*{showTable && <AddGoodsList />}*/}
      <AddGoodsList
        value={goodsList}
        onChange={(item) => {
          setGoodsList(item)
        }}
      />
      <Button htmlType="submit" form="integralDetails">
        提交
      </Button>
    </div>
  )
}

export default View
