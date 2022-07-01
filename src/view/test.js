import React, { useState } from 'react'
import { Button } from 'antd'
import { goodsList } from '@/api/admin/goods'
import SldSelMoreLeftRightGoods from '@/components/model/thirdParty/SldSelMoreLeftRightGoods'
import Transfer from '@/components/model/Transfer'

const ViewTest = (props) => {
  const [modalVisibleGoods, setModalVisibleGoods] = useState(false)
  const [selectGoods, setSelectGoods] = useState({
    info: [], //选择的商品数组
    ids: [], //选择的商品id数组
    min_num: 3, //最小数量，0为不限制
    max_num: 100 //最多选择30个
  })
  function sldHandleCancel(value, item) {
    console.log(value, item)
  }
  function goodsOk(value, item) {
    console.log(value, item)
  }
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setModalVisibleGoods(true)
        }}
      >
        viewTest
      </Button>
      <Transfer />
      {modalVisibleGoods && (
        <SldSelMoreLeftRightGoods
          selectedRows={selectGoods.info}
          selectedRowKeys={selectGoods.ids}
          modalVisible={modalVisibleGoods}
          width={1000}
          height={document.body.clientHeight - 400}
          sldHandleSeleMoreModalCancle={sldHandleCancel}
          seleSvideo={goodsOk}
          title={'1111'}
          extra={'111'}
        />
      )}
    </div>
  )
}

export default ViewTest
