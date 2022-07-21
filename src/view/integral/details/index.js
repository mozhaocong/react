import React, { createRef, useState } from 'react'
import { HtForm, DecorationOperation, UploadImg } from '@/components'
import { FromData } from './utils'
import { Button } from 'antd'
import { deepClone, isTrue, messageSuccess } from '@/uitls'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getMemberPointId, postMemberPointUpdate } from '@/api/admin/member'
const { getDecorationOperationData, setDecorationOperationData } =
  DecorationOperation
const { getUploadImgData, setUploadImgData } = UploadImg

const View = () => {
  const formRef = createRef()
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [record, setRecord] = useState({})
  let navigate = useNavigate()
  const [columns] = useState(new FromData({ formRef }).data)
  async function handleSubmit(item) {
    const decorationOperation = getDecorationOperationData(item)
    const imgData = getUploadImgData(item.address, {
      path: 'address',
      url: 'addressByName'
    })
    const show = item.show ? 1 : 0
    const params = {
      ...record,
      ...item,
      show,
      ...imgData,
      ...decorationOperation
    }
    setLoading(true)
    const data = await postMemberPointUpdate(params)
    setLoading(false)
    console.log(data)
    if (data.state == 200) {
      messageSuccess(data.msg)
      navigate(-1)
    }
  }
  async function initData() {
    const item = await getMemberPointId({ id: searchParams.get('id') })
    const data = item?.data || {}
    setRecord(deepClone(data))
    data.show = !!data.show
    const decorationOperation = setDecorationOperationData(data)
    const address = setUploadImgData(data.address, data.addressByName)
    const setData = {}
    columns.forEach((item) => {
      if (isTrue(data[item.name])) {
        setData[item.name] = data[item.name]
      }
    })
    const formRefData = {
      ...setData,
      address,
      decorationOperation
    }
    formRef.current.setFieldsValue(formRefData)
    setTimeout(() => {
      formRef.current.setFieldsValue(formRefData)
    }, 10)
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
      <Button
        type="primary"
        loading={loading}
        htmlType="submit"
        form="integralDetails"
      >
        提交
      </Button>
      <Button
        style={{ margin: '0 16px' }}
        type="primary"
        onClick={() => {
          navigate(-1)
        }}
      >
        返回
      </Button>
    </div>
  )
}

export default View
