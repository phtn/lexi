import React from 'react'
const container = {
  textAlign: 'center',

}
const button = {
  //backgroundColor: 'rgba(33, 47, 61, 0.5)',
  border: 'none',
  borderRadius: 100,
  padding: '20px 25px',
  lineHeight: '10px'
}

export default props => (
  <div style={container}>
    <button onClick={props.click} 
      style={Object.assign({}, button, {backgroundColor: props.bg})}>
      <img src={props.image} alt='' height={40} width={40}/>
    </button>
  </div>
)