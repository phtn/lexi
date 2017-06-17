import React from 'react'
const container = {
  textAlign: 'center',

}
const button = {
  backgroundColor: 'rgba(33, 47, 61, 0.5)',
  border: 'none',
  borderRadius: 50,
  padding: '20px 20px',
  lineHeight: '10px'
}

export default props => (
  <div style={container}>
    <button onClick={props.click} style={button}>
      <img src={props.image} alt='' height={40} width={40}/>
    </button>
  </div>
)