import React, { createRef, useState } from 'react'
import { HtForm, DecorationOperation } from '@/components'
import { FromData } from './utils'
import { Button } from 'antd'
const { getDecorationOperationData } = DecorationOperation

const View = (props) => {
  function handleSubmit(item) {
    const value = getDecorationOperationData(item)
  }
  const formRef = createRef()
  const [columns] = useState(new FromData({ formRef }).data)

  return (
    <div>
      <HtForm
        handleSubmit={handleSubmit}
        fId="integralDetails"
        columns={columns}
        propsForm={(item) => {
          formRef.current = item
        }}
      />
      <Button htmlType="submit" form="integralDetails">
        提交
      </Button>
    </div>
  )
}

export default View
