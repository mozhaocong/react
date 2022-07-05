import React, { useEffect } from 'react'
import { Modal } from 'antd'
import ListSearch from './ListSearch/index.js'
import { isTrue } from '@/utils'
const { GoodsList, MobileDeco, TableTree } = ListSearch
const View = (props) => {
  console.log('props', props)

  // useEffect(() => {}, [])

  function getDivList() {
    switch (props.link_type) {
      case 'goods':
        return <GoodsList onClick={lickClick} />
      case 'topic':
        return <MobileDeco onClick={lickClick} />
      case 'category':
        return <TableTree onClick={lickClick} />
    }
  }

  function lickClick(item, type) {
    console.log('item', item, type)
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
