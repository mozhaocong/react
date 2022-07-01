import React, { forwardRef, useMemo } from 'react'
import { Select } from 'antd'
import { configBusinessDataOptions } from '@/config'
const { Option } = Select

// eslint-disable-next-line react/display-name
const View = forwardRef((props, ref) => {
  const options = useMemo(() => {
    return configBusinessDataOptions[props.prop] || []
  }, [props.prop])

  return (
    <Select ref={ref} {...{ style: { width: '100%' }, ...props }}>
      {options.map((item) => {
        return (
          <Option
            value={item[props?.typeTransform?.value ?? 'value']}
            key={item[props?.typeTransform?.value ?? 'value']}
          >
            {item[props?.typeTransform?.label ?? 'label']}
          </Option>
        )
      })}
    </Select>
  )
})

export default View
