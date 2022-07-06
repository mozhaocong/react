import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import ListSearch from './ListSearch/index.js'
import { isTrue } from '@/utils'
const { GoodsList, MobileDeco, TableTree } = ListSearch
const View = (props) => {
  useEffect(() => {
    console.log('value', props.value)
  }, [])

  const [listValue, setListValue] = useState({})
  function getDivList() {
    switch (props.link_type) {
      case 'goods':
        return <GoodsList checked={props.value} onClick={lickClick} />
      case 'topic':
        return <MobileDeco checked={props.value} onClick={lickClick} />
      case 'category':
        return <TableTree checked={props.value} onClick={lickClick} />
    }
  }

  function lickClick(item) {
    setListValue(item)
  }

  function onOk() {
    if (props.onOk) {
      props.onOk(listValue)
    }
    onCancel()
  }
  function onCancel() {
    if (props.onCancel) {
      props.onCancel(false)
    }
  }
  return (
    isTrue(props.link_type) && (
      <Modal
        visible={true}
        width={'900px'}
        title="选择商品"
        onCancel={onCancel}
        onOk={onOk}
      >
        {getDivList()}
      </Modal>
    )
  )
}
export default View
