import React, { createRef } from 'react'
import { HtForm } from '@/components'
import { Button } from 'antd'

import SearchPagination from './model/pagination.js'
import { useRequest } from './hooks/index.js'

const HtSearch = (props) => {
  const formRef = createRef()
  return (
    <div>
      <HtForm
        columns={props.columns}
        propsForm={(item) => {
          formRef.current = item
          if (props.propsForm) {
            props.propsForm(item)
          }
        }}
        {...{ col: 6, fId: 'htSearchForm', ...props }}
        handleSubmit={(item) => {
          console.log('handleSubmit', item)
          if (props.onSearch) {
            props.onSearch(item || {})
          }
        }}
      />
      <Button htmlType="submit" form="htSearchForm">
        查询
      </Button>
      <Button
        onClick={() => {
          if (formRef.current) {
            try {
              formRef.current.resetFields()
            } catch (e) {
              console.log('formRef.current.resetFields 失败', e)
            }
          }
          if (props.onClear) {
            props.onClear({})
          }
        }}
      >
        重置
      </Button>
    </div>
  )
}

export { HtSearch as default }
HtSearch.SearchPagination = SearchPagination
HtSearch.useRequest = useRequest
