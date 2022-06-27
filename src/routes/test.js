import React from 'react'
export function Interceptor(pros) {
  const { route } = pros
  const RenderCom = route.component
  return <RenderCom route={route} />
}
