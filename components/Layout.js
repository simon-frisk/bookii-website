import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{
        margin: '6vw auto',
        maxWidth: 600,
        width: '92%',
        fontFamily: 'Arial Rounded MT Bold, Sans-serif',
      }}
    >
      {children}
    </div>
  )
}
