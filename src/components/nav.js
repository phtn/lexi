import React from 'react'

const container = {
  padding: 20,
}
const nav = {
  display: 'flex',
}
const title = {
  color: '#c4dff6',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 18,
  lineHeight: '30px',
  letterSpacing: 1,
}
const img = {
  marginRight: 10,
  transform: 'rotate(45deg)'
  
}


export default props => (
  <div style={container}>
    <div style={nav}>
      <img src={props.image} alt='' height={25} width={25} style={img} />
      <div style={title}>{props.title}</div>
      <br/>
    </div>
  </div>
)