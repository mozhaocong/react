import React, { useState } from 'react'
import { HtForm, UploadImg } from '@/components'
import { FromData } from './utils'
import { Button } from 'antd'
import AddGoodsList from './models/addGoodsList'
import {
  getPromotionCollectionsDetail,
  getPromotionCollectionsGoodsSequence,
  postPromotionCollectionsUpdate
} from '@/api/admin/promotion'
import { useSearchParams } from 'react-router-dom'
import { isTrue, useStateClassOperate } from '@/uitls'
const { setFormDefValue } = HtForm

const { getUploadImgData, setUploadImgData } = UploadImg

const View = () => {
  const [formRef, setFormRef] = useState({})
  const { setFun } = useStateClassOperate(sortChange)
  const [searchParams] = useSearchParams()
  const [type, setType] = useState()
  const [sortType, setSortType] = useState(0)
  const [columns] = useState(new FromData({ formRef, setFun }).data)
  const [goodsList, setGoodsList] = useState({})
  const [record, setRecord] = useState({})
  const [loading, setLoading] = useState(false)

  function sortChange() {
    goodsSequenceSort()
  }

  async function init(formRef) {
    const collectionId = searchParams.get('collectionId')
    if (!isTrue(collectionId)) return
    setType(searchParams.get('type'))
    const res = await getPromotionCollectionsDetail({ collectionId })
    const data = res?.data || {}
    setRecord(data)
    setSortType(data.sort || 0)
    const banner = setUploadImgData(data.banner, data.bannerURL)
    const rowData = setFormDefValue(columns, { ...data, banner })
    initGoodsList(data?.collectionGoodsVOs)
    formRef.setFieldsValue({ ...rowData })
  }

  function initGoodsList(list = []) {
    if (!isTrue(list)) return
    const keyList = []
    const keyObject = {}
    list.forEach((item) => {
      keyList.push(item.goodsId)
      keyObject[item.goodsId] = item
    })
    setGoodsList({
      selectedRowKeys: keyList,
      selectedRows: keyObject
    })
  }

  async function goodsSequenceSort() {
    const { selectedRowKeys = [] } = goodsList
    const sort = formRef.getFieldValue('sort')
    setSortType(sort)
    if (!isTrue(selectedRowKeys) || !sort) return
    const goodsIds = selectedRowKeys.join(',')
    const data = await getPromotionCollectionsGoodsSequence({ goodsIds, sort })
    if (![200].includes(data.state)) return
    const item = data?.data || []
    initGoodsList(item)
  }

  async function handleSubmit(item) {
    console.log(item)
    const banner = getUploadImgData(item.banner, {
      path: 'banner',
      url: 'bannerURL'
    })
    console.log(goodsList)
    let collectionGoodsVOs = []
    const { selectedRowKeys = [], selectedRows = [] } = goodsList
    if (isTrue(selectedRowKeys)) {
      collectionGoodsVOs = selectedRowKeys.map((item) => {
        return selectedRows[item]
      })
    }
    const params = { ...record, ...item, ...banner, collectionGoodsVOs }
    setLoading(true)
    const res = await postPromotionCollectionsUpdate(params)
    setLoading(false)
    console.log(res)
  }

  // useEffect(() => {}, [])
  return (
    <div>
      <HtForm
        handleSubmit={handleSubmit}
        fId="integralDetails"
        columns={columns}
        propsForm={(item) => {
          console.log(item)
          setFormRef(item)
          init(item)
        }}
      />
      {/*{showTable && <AddGoodsList />}*/}
      <AddGoodsList
        value={goodsList}
        sortType={sortType}
        type={type}
        onChange={(item) => {
          setGoodsList(item)
        }}
      />
      <Button loading={loading} htmlType="submit" form="integralDetails">
        提交
      </Button>
    </div>
  )
}

export default View
