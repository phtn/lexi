import React from 'react'
import Profile from '../profile.jpg'


const pic = {
  borderRadius: 200,
  border: '5px solid #FFBD33',
}


export default props => (
  <div>
    <img 
      src={Profile} 
      style={pic} 
      height={200} 
      width={200} 
      alt=''
      className='animated fadeIn' 
      />
  </div>
)