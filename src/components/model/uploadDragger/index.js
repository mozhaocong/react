import React, { Component, Fragment } from 'react'
import { failTip, getLocalStorageStingVal, sldBeforeUpload } from '@/utils/utils'
import { Icon, Upload } from 'antd'
import { apiUrl, uploadLimit } from '@/utils/sldconfig'
import { deepClone, isTrue } from '@/htwig/utils'
import style from './index.less'
const { Dragger } = Upload
export default class UploadImg extends Component {
	constructor(props) {
		super(props)
	}

	state = {
		fileList: [],
	}

	get getFileListValue() {
		const { fileList } = this.state
		const { value = {} } = this.props
		return value.fileList ?? fileList
	}

	beforeUpload = (file, fileList, limit = uploadLimit) => {
		const { action, onChange } = this.props
		if (!action) {
			if (onChange) {
				onChange({ fileList: fileList, file: file, beforeUpload: true })
			}
			return false
		}

		if (!sldBeforeUpload(file, fileList, limit)) {
			return false
		}
		const { beforeUpload, accept = '.gif,.jpeg,.png,.jpg,' } = this.props
		const urlType = file.name.match(/\.([^\.]+)$/)[1]
		if (beforeUpload) {
			return beforeUpload()
		}

		if (!accept.includes(urlType)) {
			failTip('格式不符合')
			return false
		} else {
			return true
		}
	}

	handleChange = (info) => {
		const addData = {
			fileList: deepClone(info.fileList),
			img_info:
				info.file.response != undefined && info.fileList.length > 0 && info.file.response.data != undefined
					? info.file.response.data
					: [],
		}
		const { onChange } = this.props
		if (onChange) {
			onChange({ ...addData, info })
		}
		if (!isTrue(this.props.value)) {
			this.setState({ ...addData })
		}
	}

	render() {
		const {
			upload_name = 'file',
			upload_url = `${apiUrl}v3/oss/common/upload?source=setting`,
			data = {},
			accept = '.gif, .jpeg, .png,.jpg,',
			maxlength = 1,
		} = this.props
		const fileList = this.getFileListValue || []
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">上传</div>
			</div>
		)
		return (
			<Fragment>
				<Dragger
					className={fileList.length >= maxlength ? style.htDragger : ''}
					withCredentials={true}
					beforeUpload={this.beforeUpload}
					accept={accept}
					name={upload_name}
					data={data}
					action={upload_url}
					fileList={fileList}
					headers={{
						Authorization: 'Bearer ' + getLocalStorageStingVal('sld_token'),
					}}
					onChange={this.handleChange}
				>
					{fileList.length >= maxlength ? null : uploadButton}
				</Dragger>
			</Fragment>
		)
	}
}
