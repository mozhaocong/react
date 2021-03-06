import React, { Component } from 'react'
import { Button, Col, Input, Row } from 'antd'
import Modal from './modal.js'
import { isTrue, arrayGetData, isObject } from '@/uitls'
import { HtSelect } from '@/components'
import {
  decorationOperationValidator,
  getDecorationOperationData,
  getLinkName,
  inputEnter,
  linkMapData,
  modalList,
  noInput,
  selectOptions,
  setDecorationOperationData
} from './utils'

class decorationOperation extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    modalView: false,
    linkType: '',
    linkValue: ''
  }

  get getLinkType() {
    let { linkType } = this.state
    const { value = {} } = this.props
    return value.linkType ?? linkType
  }

  get getLinkValue() {
    let { linkValue } = this.state
    const { value = {} } = this.props
    return value.linkValue ?? linkValue
  }

  selectChang = (e) => {
    this.setState({ modalView: modalList.includes(e) })
    this.propsChange({ linkType: e, linkValue: '' })
  }

  linkInput = (e) => {
    this.propsChange({ linkType: this.getLinkType, linkValue: e.target.value })
  }
  sldHandleLinkCancel = () => {
    this.setState({ modalView: false })
  }

  onOk = (value) => {
    this.propsChange({
      linkType: this.getLinkType,
      linkValue: linkMapData({
        type: this.getLinkType,
        val: value,
        client: 'mobile'
      }),
      linkInfo: value
    })
  }

  propsChange = (data = {}) => {
    const { onChange } = this.props
    if (onChange) {
      onChange({
        ...data
      })
    }
    if (!isTrue(this.props.value)) {
      this.setState({ ...data })
    }
  }

  get wrapperCol() {
    const { wrapperCol } = this.props
    return wrapperCol ?? 6
  }
  get labelCol() {
    const { labelCol } = this.props
    return labelCol ?? 3
  }

  get modalValue() {
    if (isObject(this?.props?.value)) {
      return this.props.value?.linkInfo
    } else {
      return {}
    }
  }

  getInput() {
    const linkType = this.getLinkType
    const linkValue = this.getLinkValue
    const typeName = arrayGetData(selectOptions, { key: linkType })
    const { disabled = false } = this.props
    if (!isTrue(linkType)) return
    if (noInput.includes(linkType)) return
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Col span={this.labelCol} className="ant-form-item-label">
          <label>
            <span style={{ color: 'red' }}>*</span>
            {typeName[0]?.name}
          </label>
        </Col>
        <Col span={this.wrapperCol}>
          {inputEnter.includes(linkType) && (
            <Input
              disabled={disabled}
              value={linkValue}
              onChange={this.linkInput}
            />
          )}
          {modalList.includes(linkType) &&
            (linkValue ? (
              <div
                style={{
                  border: '1px solid #d9d9d9',
                  padding: '0 10px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  if (disabled) {
                    return
                  }
                  this.setState({ modalView: true })
                }}
              >
                {linkValue}
              </div>
            ) : (
              <Button
                disabled={disabled}
                style={{ width: '100%' }}
                onClick={() => {
                  this.setState({ modalView: true })
                }}
              >
                <div>{'?????????'}</div>
              </Button>
            ))}
        </Col>
      </div>
    )
  }

  render() {
    const { modalView } = this.state
    const { label = '??????', disabled = false } = this.props
    const linkType = this.getLinkType
    return (
      <Row
        style={{
          maxHeight: '80vh',
          overflow: 'auto',
          margin: '10px 0'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Col span={this.labelCol} className="ant-form-item-label">
            <label>{label}</label>
          </Col>
          <Col span={this.wrapperCol}>
            <HtSelect
              disabled={disabled}
              value={linkType}
              onChange={this.selectChang}
              options={selectOptions}
              typeTransform={{ value: 'key', label: 'name' }}
            />
          </Col>
        </div>
        {this.getInput()}
        {modalView && (
          <Modal
            link_type={linkType}
            value={this.modalValue}
            onOk={this.onOk}
            onCancel={this.sldHandleLinkCancel}
            client={'mobile'}
          />
        )}
      </Row>
    )
  }
}
export { decorationOperation as default }
decorationOperation.decorationOperationValidator = decorationOperationValidator
decorationOperation.getLinkName = getLinkName
decorationOperation.getDecorationOperationData = getDecorationOperationData
decorationOperation.setDecorationOperationData = setDecorationOperationData
