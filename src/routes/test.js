import React from 'react'
export function Interceptor(pros) {
  const { route } = pros
  const RenderCom = route.component
  // eslint-disable-next-line react/react-in-jsx-scope
  return <RenderCom name={route.name} routes={route.children} />
}
