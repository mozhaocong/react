import React from 'react'
import { Pagination, Spin } from 'antd'

// eslint-disable-next-line react/display-name
export default (
  props = {
    current: 1,
    total: 50,
    pageSize: 10
  }
) => {
  if (!props.total) return ''
  return (
    <div style={{ textAlign: 'right', margin: '8px' }}>
      <Spin spinning={props.loading ?? false}>
        <Pagination
          size="small"
          current={props.current || 1}
          total={props.total || 50}
          pageSize={props.pageSize || 10}
          showSizeChanger
          showQuickJumper
          onChange={(current, pageSize) => {
            if (props.onChange) {
              props.onChange({ current, pageSize })
            }
          }}
          onShowSizeChange={(current, pageSize) => {
            if (props.onShowSizeChange) {
              props.onShowSizeChange({ current, pageSize })
            }
          }}
        />
      </Spin>
    </div>
  )
}
