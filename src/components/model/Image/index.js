import React from 'react'

const View = (props) => {
  return (
    <div style={props.style ?? { width: '80px', margin: 'auto' }}>
      <img src={props.url} alt="" style={{ width: '100%' }} loading="lazy" />
    </div>
  )
}

export default View
