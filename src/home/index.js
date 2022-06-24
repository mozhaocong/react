/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-09 16:37:17
 * @LastEditTime: 2022-02-14 10:49:24
 */
import React from 'react'
import './index.css'
import img from '@/assets/test.jpg'

const Home = () => {
  function handleonClick() {
    console.log('2525')
  }
  return (
    <h1>
      <div className="title" onClick={handleonClick}>
        Home-less
      </div>
    </h1>
  )
}

export default Home
