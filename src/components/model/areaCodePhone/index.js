import React, { Component } from 'react'
import { Input, Select } from 'antd'
import { areaCodeData } from './areaCode'
const { Option } = Select
export default class countryProvince extends Component {
  constructor(props) {
    super(props)
  }

  inputChange = (e) => {
    const { onChange, value } = this.props
    if (onChange) {
      onChange({
        ...value,
        phone: e.target.value
      })
    }
  }

  selectChang = (e) => {
    const { onChange, value } = this.props
    if (onChange) {
      onChange({
        ...value,
        areaCode: e
      })
    }
  }

  render() {
    let { value } = this.props
    if (!value) {
      value = {}
    }
    const { phone, areaCode } = value
    return (
      <div style={{ display: 'flex' }}>
        <Select
          showSearch
          style={{ width: 300 }}
          placeholde="区号"
          value={areaCode}
          onChange={this.selectChang}
          allowClear
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {areaCodeData.map((item, index) => {
            return (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            )
          })}
        </Select>
        <Input placeholder="手机号" onChange={this.inputChange} value={phone} />
      </div>
    )
  }
}
