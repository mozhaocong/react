import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { axiosInit } from '@/http'
axiosInit()
ReactDOM.render(<App />, document.getElementById('root'))
