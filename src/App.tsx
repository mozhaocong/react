import React from 'react'
import routes from '@/routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Interceptor } from '@/routes/test.js'
import { isTrue } from '@/utils'
const App = () => {
  function setRouter() {
    return routes.map((item: any, index: any) => {
      return (
        <Route
          key={index}
          path={item.path}
          element={<Interceptor route={item} />}
        >
          {isTrue(item.children) &&
            item.children.map((res: any, childIndex: number) => {
              return (
                <Route
                  path={res.path}
                  key={childIndex}
                  element={<Interceptor route={res} />}
                />
              )
            })}
        </Route>
      )
    })
  }

  return (
    <BrowserRouter>
      <Routes>{setRouter()}</Routes>
    </BrowserRouter>
  )
}

export default App
