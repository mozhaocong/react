import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { axiosInit } from '@/http'
import '@/assets/css/admin/index.less'
axiosInit()
ReactDOM.render(<App />, document.getElementById('root'))
