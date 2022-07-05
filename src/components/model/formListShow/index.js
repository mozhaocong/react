import React from 'react'
import { Col, Form, Row } from 'antd'
import { isFunction } from '@/htwig/utils/typeJudgment'
import { isTrue } from '@/htwig/utils'

class HtFormShowComponent extends React.Component {
  getValueData = (item, itemKey) => {
    let { model = {}, after = {}, Before = {}, defData = {} } = this.props
    if (isFunction(item)) {
      return item(model)
    } else {
      const data = model[item] ?? defData[itemKey]
      if (!isTrue(data)) return ''
      return (
        (after[itemKey] || '') + data + (Before[itemKey] || '') ||
        defData[itemKey] ||
        ''
      )
    }
  }
  render() {
    let {
      columns,
      col = 24,
      model = {},
      rowCol = {},
      defRowCol = 4,
      rowStyle = {}
    } = this.props

    if (!columns) {
      columns = []
    }
    return (
      <Row
        // gutter={[16, 16]}
        style={{
          overflow: 'auto'
          // margin: '10px 0',
        }}
      >
        {columns.map((item, index) => {
          if (item.display) {
            if (item.display() === false) {
              return false
            }
          }
          if (item.render) {
            return item.render()
          }
          const data = []
          for (const itemKey in item) {
            const colStyle = rowStyle[itemKey] ?? {}
            data.push({
              value: this.getValueData(item[itemKey], itemKey),
              span: rowCol[itemKey] ?? defRowCol,
              colStyle: colStyle || {}
            })
          }

          return (
            <Col span={col} key={index} style={{ display: 'flex' }}>
              {data.map((res) => {
                return (
                  <Col
                    style={{
                      border: '1px solid #dddddd',
                      padding: '10px',
                      wordBreak: 'break-word',
                      ...res.colStyle
                    }}
                    span={res.span}
                  >
                    {res.value}
                  </Col>
                )
              })}
            </Col>
          )
        })}
      </Row>
    )
  }
}
export default HtFormShowComponent
