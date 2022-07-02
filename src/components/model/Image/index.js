import React from 'react'

const View = (props) => {
  return (
    <div style={props.style}>
      <img src={props.url} alt="" style={{ width: '100%' }} loading="lazy" />
    </div>
  )
}

export default View
