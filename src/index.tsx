import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { axiosInit } from '@/http'
import '@/assets/css/admin/index.less'
// 微前端
import './public-path'
axiosInit()
// ReactDOM.render(<App />, document.getElementById('root'))

function appInit() {
  axiosInit()
  ReactDOM.render(<App />, document.getElementById('root'))
}

// 将卸载操作放入 unmount 函数
function unmount() {
  console.log('微应用child-react16卸载了')
}

function mount() {
  appInit()
  console.log('微应用child-react16渲染了')
}

// 微前端环境下，注册mount和unmount方法
// @ts-ignore
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  appInit()
}
