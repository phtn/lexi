import React from 'react'
const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 400
}
const label = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 10,
  color: '#c4dff6'
}
export default props => (
  <div style={container} >
    <span style={label}>
      0.0
    </span>
  </div>
)