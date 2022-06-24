import React from 'react'
import Home from './home/index.js'
import Other from './other'
import routes from '@/routes/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Interceptor } from '@/routes/test.js'

const App = () => {
  console.log('routes', routes)
  function setRouter() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return routes.map((item, index) => {
      return (
        <Route
          key={index}
          path={item.path}
          element={<Interceptor route={item} />}
        />
      )
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        {setRouter()}
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/other" element={<Other />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
