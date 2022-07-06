import React, { createRef, useState } from 'react'
import { HtForm } from '@/components'
import { FromData } from './utils'
import { Button } from 'antd'
import AddGoodsList from './models/addGoodsList'

const View = (props) => {
  function handleSubmit(item) {
    console.log(item)
    console.log(value)
  }
  const formRef = createRef()
  const [showTable, setShowTable] = useState(true)
  const [columns] = useState(new FromData({ formRef, sortChange }).data)

  function sortChange(value) {
    setShowTable(!value)
  }

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
      {showTable && <AddGoodsList />}
      <Button htmlType="submit" form="integralDetails">
        提交
      </Button>
    </div>
  )
}

export default View
