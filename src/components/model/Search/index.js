import React, { useMemo, useState } from 'react'
import { HtForm } from '@/components'
import { Button } from 'antd'

import SearchPagination from './model/pagination.js'
import { useRequest } from './hooks'

const HtSearch = (props) => {
  const [formRef, setFormRef] = useState({})

  const [expand, setExpand] = useState(false)

  const maxLength = useMemo(() => {
    return props.maxLength ?? 4
  }, [props.maxLength])

  const isExpand = useMemo(() => {
    return props.columns.length > maxLength
  }, [maxLength, props.columns])

  function expandClick() {
    setExpand(!expandType)
    if (props.onExpand) {
      props.onExpand(!expandType)
    }
  }

  const expandType = useMemo(() => {
    return props.expand ?? expand
  }, [expand, props.expand])

  const columns = useMemo(() => {
    return props.columns.filter((item, index) => {
      if (expandType) return true
      return index < maxLength
    })
  }, [props.columns, maxLength, expandType])

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <HtForm
        {...{
          col: 6,
          fId: 'htSearchForm',
          formItemLayout: {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
          },
          ...props
        }}
        style={{ flex: 1 }}
        columns={columns}
        propsForm={(item) => {
          setFormRef(item)
          if (props.propsForm) {
            props.propsForm(item)
          }
        }}
        formItem={{ margin: 0 }}
        handleSubmit={(item) => {
          if (props.onSearch) {
            props.onSearch(item || {})
          }
        }}
      />
      <div
        style={{
          height: '39px',
          display: 'flex',
          alignItems: 'center',
          width: '200px',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          type="primary"
          loading={props.loading ?? false}
          htmlType="submit"
          form="htSearchForm"
          style={{ margin: '0 8px 0 0' }}
        >
          查询
        </Button>
        <Button
          style={{ margin: '0 8px 0 0' }}
          loading={props.loading ?? false}
          onClick={() => {
            if (formRef) {
              try {
                formRef.resetFields()
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
        {isExpand && (
          <Button type="link" onClick={expandClick}>
            {expandType ? '收起' : '更多'}
          </Button>
        )}
      </div>
    </div>
  )
}

export { HtSearch as default }
HtSearch.SearchPagination = SearchPagination
HtSearch.useRequest = useRequest
