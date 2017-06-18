import React from 'react'
import { Animate } from 'react-move'
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
  <Animate 
    default={{n:40}}
    data={{n:props.size}}
    duration={1000}
  >
  {i=> (
    <div style={container}>
      <button onClick={props.click} 
        style={Object.assign({}, button, {backgroundColor: props.bg})}>
        <img src={props.image} alt='' height={i.n} width={i.n}/>
      </button>
    </div>
  )}
  
  </Animate>
)