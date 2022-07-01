import React from 'react'
import { Button } from 'antd'
import { Input } from 'antd'
const { TextArea } = Input
import styles from './index.less'
import { isNumber } from 'lodash'

class HTQuill extends React.Component {
	divInput = null
	timeOut = 0
	state = { defValue: '<div></div>', isOnInput: false, showCode: false }
	componentDidUpdate = () => {
		const { defValue } = this.state
		const { value } = this.props
		if (this.state.isOnInput || value === defValue) return
		this.setState({ defValue: value })
	}

	onInput = (value) => {
		clearTimeout(this.timeOut)
		this.timeOut = setTimeout(() => {
			const { onChange } = this.props
			if (onChange) {
				onChange(value)
			}
		}, 10)
	}

	render() {
		const { defValue, showCode } = this.state
		const { height = 400, disabled = false } = this.props
		return (
			<div style={{ width: '600px' }}>
				<div>
					<Button
						onClick={() => {
							this.setState({ showCode: !this.state.showCode })
						}}
					>
						{!showCode ? '显示代码' : '显示内容'}
					</Button>
				</div>
				{!showCode ? (
					<body
						className={styles.shopify}
						onFocus={() => {
							this.setState({ isOnInput: true })
						}}
						onBlur={() => {
							this.setState({ isOnInput: false })
						}}
						ref={(ref) => (this.divInput = ref)}
						style={{
							outline: 'none',
							padding: '16px',
							boxSizing: 'border-box',
							border: '1px solid #ccc',
							height: isNumber(height) ? height + 'px' : height,
							minHeight: '400px',
							overflowY: 'auto',
						}}
						contentEditable={!disabled}
						suppressContentEditableWarning
						onInput={() => {
							this.divInput.childNodes.forEach((item, index) => {
								if (item.nodeType === 3) {
									const data = document.createElement(`div`)
									data.innerText = item.nodeValue
									this.divInput.replaceChild(data, this.divInput.childNodes[index]) //替换文本
									// 光标在最后
									document.execCommand('selectAll', false, null)
									document.getSelection().collapseToEnd()
								}
							})
							this.onInput(this.divInput.innerHTML)
						}}
						dangerouslySetInnerHTML={{ __html: defValue }}
					/>
				) : (
					<TextArea
						disabled={disabled}
						style={{
							height: isNumber(height) ? height + 'px' : height,
							minHeight: '400px',
							overflowY: 'auto',
						}}
						onFocus={() => {
							this.setState({ isOnInput: true })
						}}
						onBlur={() => {
							this.setState({ isOnInput: false })
						}}
						rows={4}
						value={defValue}
						onChange={(e) => {
							this.onInput(e.target.value)
							this.setState({ defValue: e.target.value })
						}}
					/>
				)}
			</div>
		)
	}
}
export default HTQuill
