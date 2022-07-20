import React, { Component } from 'react'
import { Icon, Upload } from 'antd'
import PreviewImg from './model/PreviewImg'
import { getToken, isTrue } from '@/utils/index.ts'
import { apiUrl } from '@/api'
import { getUploadImgData, setUploadImgData } from './model/utils'

class UploadImg extends Component {
  state = {
    fileList: [],
    preview_img: '', //预览的图片
    preview_alt_con: '', //预览图片的title，鼠标悬浮展示的内容
    show_preview_modal: false //预览图片modal 是否展示
  }

  BeforeUpload(file, fileList, limit = 20) {
    if (file.size != undefined && file.size > 1024 * 1024 * limit) {
      failTip(
        `${sldComLanguage('上传文件过大，请上传小于')}` +
          { limit } +
          `${sldComLanguage('M的图片')}`
      )
      return false
    }
    return true
  }

  get getFileListValue() {
    const { fileList } = this.state
    const { value = {} } = this.props
    return value.fileList ?? fileList
  }

  uploadChange = (info) => {
    const { maxLength = 1, value = {} } = this.props
    let addData = {}
    console.log(value)
    if (maxLength === 1) {
      addData = {
        fileList: info.fileList,
        img_info:
          info.file.response != undefined &&
          info.fileList.length > 0 &&
          info.file.response.data != undefined
            ? info.file.response.data
            : {}
      }
    } else {
      const { img_info = {} } = value
      const data = { ...img_info }
      const imgInfoData = {}
      if (
        info.file.response != undefined &&
        info.fileList.length > 0 &&
        info.file.response.data != undefined
      ) {
        info.fileList.forEach((res) => {
          if (data[res.uid]) {
            imgInfoData[res.uid] = data[res.uid]
          } else {
            imgInfoData[res.uid] = info.file.response.data
          }
        })
      } else {
        info.fileList.forEach((res) => {
          if (data[res.uid]) {
            imgInfoData[res.uid] = data[res.uid]
          }
        })
      }
      addData = {
        fileList: info.fileList,
        img_info: imgInfoData
      }
    }

    const { onChange } = this.props
    if (onChange) {
      if (isTrue(info.fileList)) {
        onChange({ ...addData })
      } else {
        onChange({})
      }
    }
    if (!isTrue(this.props.value)) {
      this.setState({ ...addData })
    }
  }

  viewImg = (file) => {
    this.setState({
      preview_img: file.url || file.thumbUrl,
      show_preview_modal: true
    })
  }

  //关闭预览图片
  closeViewModal = () => {
    this.setState({
      show_preview_modal: false
    })
  }
  render() {
    const { preview_img, show_preview_modal, modal_width, preview_alt_con } =
      this.state
    const {
      upload_name = 'file',
      upload_url = `${apiUrl}/v3/oss/common/upload?source=setting`,
      maxLength = 1
    } = this.props
    const fileList = this.getFileListValue || []
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传图片</div>
      </div>
    )
    return (
      <div>
        <Upload
          withCredentials={true}
          beforeUpload={this.BeforeUpload}
          accept={'.gif, .jpeg, .png,.jpg,'}
          name={upload_name}
          action={upload_url}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.viewImg}
          onChange={this.uploadChange}
          headers={{
            Authorization: 'Bearer ' + getToken()
          }}
        >
          {fileList.length >= maxLength ? null : uploadButton}
        </Upload>
        {/*图片预览-start*/}
        <PreviewImg
          img={preview_img}
          show_preview_modal={show_preview_modal}
          modal_width={modal_width}
          preview_alt_con={preview_alt_con}
          closePreviewModal={() => this.closeViewModal()}
        />
        {/*图片预览-end*/}
      </div>
    )
  }
}
export { UploadImg as default }
UploadImg.getUploadImgData = getUploadImgData
UploadImg.setUploadImgData = setUploadImgData
