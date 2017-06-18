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
        height={props.size} 
        width={props.size} 
        alt=''
        className='animated fadeIn' 
        />
    </div>
  
)