import React from 'react'
import { Radio } from 'antd'

export default class HtSelect extends React.Component {
	render() {
		let { typeTransform = {} } = this.props
		let options = this.props.options
		options = [{ value: '', label: '全部' }, ...options]
		const props = {}
		for (const propsKey in this.props) {
			if (propsKey !== 'options') {
				props[propsKey] = this.props[propsKey]
			}
		}

		return (
			<Radio.Group {...{ defaultValue: '', ...props }} style={{ margin: '0 0 10px 0 ' }}>
				{options.map((item) => {
					return (
						<Radio.Button value={item[typeTransform.value ?? 'value']}>
							{item[typeTransform.label ?? 'label']}
						</Radio.Button>
					)
				})}
			</Radio.Group>
		)
	}
}
