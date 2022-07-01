import React from 'react'
import { Col, Form, Row } from 'antd'

class HtFormShowComponent extends React.Component {
	getValueData = (item) => {
		let { model = {} } = this.props
		if (item.customRender) {
			return item.customRender({ record: model, text: model[item.name] })
		} else {
			return model[item.name]
		}
	}
	render() {
		let { columns, formItemLayout, col = 24, model = {} } = this.props
		formItemLayout = formItemLayout ?? {
			labelCol: 8,
			wrapperCol: 8,
		}
		if (!columns) {
			columns = []
		}
		return (
			<Row
				style={{
					maxHeight: '80vh',
					overflow: 'auto',
					display: 'flex',
					flexWrap: 'wrap',
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
					return (
						<Col span={item.col ?? col} key={index} style={{ display: 'flex' }}>
							<Col
								style={{
									border: '1px solid #dddddd',
									wordBreak: 'breakAll',
									background: '#f7f7fc',
									color: '#999999',
									padding: '10px',
								}}
								span={item.labelCol ?? formItemLayout.labelCol}
							>
								{item.label}
							</Col>
							<Col
								style={{
									border: '1px solid #dddddd',
									wordBreak: 'breakAll',
									padding: '10px',
								}}
								span={item.wrapperCol ?? formItemLayout.wrapperCol}
							>
								{this.getValueData(item)}
							</Col>
						</Col>
					)
				})}
			</Row>
		)
	}
}
export default HtFormShowComponent
