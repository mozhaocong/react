import React, { useEffect } from 'react'
import './index.css'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    console.log('useEffect addDataListener')
    // @ts-ignore
    console.log('window.microApp.getData()', window?.microApp?.getData())
    // navigate('integral')
    // @ts-ignore
    window.microApp?.addDataListener((data) => {
      console.log('addDataListener', data)
    })
  }, [])
  return (
    <div className="layout">
      <Outlet />
    </div>
  )
}

export default Home
