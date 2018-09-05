import React from 'react'
import Slider from 'react-slick'
import { Icon } from 'semantic-ui-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const container = {
  textAlign: 'center'
}
const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 3000,
}
const slides = {
  color: '#c4dff6',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 18
}
const icon = {
  marginRight: 10,
  fontSize: 12,
  color: '#ccc'
}

export default props => (
  <div style={container} className='animated fadeInUp'>
    <Slider {...settings}>
      <div style={slides}><Icon style={icon} name='address card'/>Jun Orville Lecena</div>
      <div style={slides}><Icon style={icon} name='puzzle'/>Web Developer</div>
      <div style={slides}><Icon style={icon} name='map pin'/>Philadelphia, PA</div>
      <div style={slides}><Icon style={icon} name='twitter'/>@phtn458</div>
      <div style={slides}><Icon style={icon} name='github'/>github.com/phtn</div>
    </Slider>
  </div>
)
