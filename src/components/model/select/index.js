import React from 'react'
import { Select } from 'antd'
const { Option } = Select

export default class HtSelect extends React.Component {
  render() {
    const { typeTransform = {}, options = [] } = this.props
    return (
      <Select {...{ style: { width: '100%' }, ...this.props }}>
        {options.map((item, index) => {
          return (
            <Option
              value={item[typeTransform.value ?? 'value']}
              key={item[typeTransform.value ?? 'value']}
            >
              {item[typeTransform.label ?? 'label']}
            </Option>
          )
        })}
      </Select>
    )
  }
}
