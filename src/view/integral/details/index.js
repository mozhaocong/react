import React, { createRef, useState } from 'react'
import { HtForm } from '@/components'
import { FromData } from '@/view/integral/details/utils'

const View = (props) => {
  function showClick(item) {
    console.log(item)
  }
  const formRef = createRef()
  const [columns] = useState(new FromData({ formRef }).data)

  return (
    <div>
      <HtForm
        columns={columns}
        propsForm={(item) => {
          formRef.current = item
        }}
      />
    </div>
  )
}

export default View
