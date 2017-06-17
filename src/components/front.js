import React from 'react'
import ReactLogo from '../img/react.svg'
import ReduxLogo from '../img/redux.svg'
const container = {
  //border: '1px solid gray',
  height: '100vh',
  display: 'flex',
  //alignItems: 'center',
  justifyContent: 'center',
}
const content1 = {
  marginTop: 100
}
export default props => (
  <div style={container}>
    <div style={content1}>
      <img src={ReactLogo} height={80} width={80} alt=''/>
    </div>
    <div style={content1}>
      <img src={ReduxLogo} height={40} width={40} alt=''/>
    </div>
  </div>
)