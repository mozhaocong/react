import React from 'react'
export function Interceptor(pros) {
  const { route } = pros
  const RenderCom = route.component
  return (
    <div>
      <RenderCom route={route} />
    </div>
  )
}
