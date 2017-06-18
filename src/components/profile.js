import React from 'react'
import { Animate } from 'react-move'
import Profile from '../profile.jpg'


const pic = {
  borderRadius: 200,
  border: '5px solid #FFBD33',
}


export default props => (
  <Animate
    default={{n:200, o: 1}}
    data={{n:props.size, o:props.opacity}}
    duration={1750}
    easing='easeIn'
  >
  {i=> (
    <div>
      <img 
        src={Profile} 
        style={Object.assign({}, pic, {opacity: i.o})} 
        height={i.n} 
        width={i.n} 
        alt=''
        className='animated fadeIn' 
        />
    </div>
  )}
  
  </Animate>
)