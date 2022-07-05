import React, { useEffect } from 'react'
import { Modal } from 'antd'
import ListSearch from './ListSearch/index.js'
import { isTrue } from '@/utils'
import TableTree from '@/components/model/decorationOperation/ListSearch/tableTree'
const { GoodsList, MobileDeco, CateTree } = ListSearch
const View = (props) => {
  console.log('props', props)

  // useEffect(() => {}, [])

  function getDivList() {
    switch (props.link_type) {
      case 'goods':
        return <GoodsList />
      case 'topic':
        return <MobileDeco />
      case 'category':
        return <TableTree />
    }
  }

  return (
    isTrue(props.link_type) && (
      <Modal
        visible={true}
        width={'900px'}
        title="选择商品"
        onCancel={() => {
          if (props.onCancel) {
            props.onCancel(false)
          }
        }}
      >
        {getDivList()}
      </Modal>
    )
  )
}
export default View
