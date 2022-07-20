import React, { createRef, useState } from 'react'
import { HtForm, DecorationOperation, UploadImg } from '@/components'
import { FromData } from './utils'
import { Button } from 'antd'
import { deepClone, isTrue, messageSuccess } from '@/utils'
import { useSearchParams } from 'react-router-dom'
import { getMemberPointId, postMemberPointUpdate } from '@/api/admin/member'
const { getDecorationOperationData, setDecorationOperationData } =
  DecorationOperation
const { getUploadImgData, setUploadImgData } = UploadImg

const View = (props) => {
  const formRef = createRef()
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [record, setRecord] = useState({})
  const [columns] = useState(new FromData({ formRef }).data)
  async function handleSubmit(item) {
    const decorationOperation = getDecorationOperationData(item)
    const address = getUploadImgData(item.address)
    const show = item.show ? 1 : 0
    const params = { ...record, ...item, show, address, ...decorationOperation }
    setLoading(true)
    const data = await postMemberPointUpdate(params)
    setLoading(false)
    messageSuccess('操作成功')
  }
  async function initData() {
    const item = await getMemberPointId({ id: searchParams.get('id') })
    const data = item?.data || {}
    setRecord(deepClone(data))
    data.show = !!data.show
    const decorationOperation = setDecorationOperationData(data)
    const address = setUploadImgData(data.address)
    const setData = {}
    columns.forEach((item) => {
      if (isTrue(data[item.name])) {
        setData[item.name] = data[item.name]
      }
    })
    formRef.current.setFieldsValue({
      ...setData,
      address,
      decorationOperation
    })
  }
  return (
    <div>
      <HtForm
        handleSubmit={handleSubmit}
        fId="integralDetails"
        columns={columns}
        propsForm={(item) => {
          formRef.current = item
          initData()
        }}
      />
      <Button loading={loading} htmlType="submit" form="integralDetails">
        提交
      </Button>
    </div>
  )
}

export default View
