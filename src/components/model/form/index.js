import React from 'react'
import { Col, Form, Input, Row, Spin } from 'antd'

class HtFormComponent extends React.Component {
  componentDidMount() {
    const { form, propsForm } = this.props
    if (propsForm) {
      propsForm(form)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { handleSubmit } = this.props
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (handleSubmit) {
          handleSubmit(values)
        }
      }
    })
  }

  render() {
    let {
      fId,
      loading,
      columns,
      formItemLayout,
      col = 24,
      labelAlign = 'right'
    } = this.props
    const { getFieldDecorator } = this.props.form
    formItemLayout = formItemLayout ?? {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 }
    }
    if (!columns) {
      columns = []
    }
    return (
      <Spin spinning={loading ?? false}>
        <Row gutter={[16, 16]} style={{ margin: 0 }}>
          <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            id={fId || 'fromID'}
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
              return (
                <Col span={col} key={index}>
                  <Form.Item
                    extra={item.extra}
                    key={index}
                    labelAlign={item.labelAlign ?? labelAlign}
                    className="htFrom"
                    label={item.label}
                    labelCol={item.labelCol ?? formItemLayout.labelCol}
                    wrapperCol={item.wrapperCol || formItemLayout.wrapperCol}
                  >
                    {getFieldDecorator(item.name, {
                      ...(item.fieldDecoratorProps || {}),
                      initialValue: item.initialValue,
                      rules: [...(item.rules || [])]
                    })(
                      item.component ? (
                        item.component()
                      ) : (
                        <Input {...item.props} />
                      )
                    )}
                  </Form.Item>
                </Col>
              )
            })}
          </Form>
        </Row>
      </Spin>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'htFormComponent' })(
  HtFormComponent
)
export default WrappedHorizontalLoginForm
