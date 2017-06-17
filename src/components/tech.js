import React from 'react'

const container = {
  textAlign: 'center',

}
const button = {
  backgroundColor: 'rgba(33, 47, 61, 0.5)',
  border: 'none',
  padding: '20px 40px',
  borderRadius: 5,
}
const text = {
  color: '#FFC300',
  letterSpacing: 2,
  fontFamily: 'Inconsolata, monospace'
}
export default props => (
  <div style={container}>
    <button onClick={props.click} style={button}>
      <span style={text}>TECHNOLOGIES</span>
    </button>
  </div>
)