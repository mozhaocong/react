import React, { forwardRef, useMemo, useState } from 'react'
import { Radio } from 'antd'
import { configBusinessDataOptions } from '@/config'
// eslint-disable-next-line react/display-name
const View = forwardRef((props, ref) => {
  const [defaultValue, setDefaultValue] = useState()
  const value = useMemo(() => {
    return props.value ?? defaultValue
  }, [defaultValue, props.value])

  const options = useMemo(() => {
    return configBusinessDataOptions[props.prop] || []
  }, [props.prop])
  function groupChange(e) {
    if (props.onChange) {
      props.onChange(e?.target?.value)
    }
    setDefaultValue(e?.target?.value)
  }
  return (
    <Radio.Group
      ref={ref}
      value={value}
      onChange={groupChange}
      disabled={props.disabled ?? false}
    >
      {options.map((res) => {
        return (
          <Radio key={res.value} value={res.value}>
            {res.label}
          </Radio>
        )
      })}
    </Radio.Group>
  )
})

export default View
