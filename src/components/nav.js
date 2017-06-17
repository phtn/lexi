import React from 'react'

const container = {
  padding: 20,
}
const nav = {
  display: 'flex',
}
const title = {
  color: '#999',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 18,
  lineHeight: '30px'
}
const img = {
  marginRight: 20
}


export default props => (
  <div style={container}>
    <div style={nav}>
      <img src={props.image} alt='' height={30} width={30} style={img} />
      <div style={title}>{props.title}</div>
      <br/>
    </div>
  </div>
)