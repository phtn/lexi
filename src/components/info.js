import React from 'react'
import Slider from 'react-slick'
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
  color: '#999',
  fontFamily: 'Inconsolata, monospace',
}
const info = {
  border: '1px solid #444',
  padding: '10px 20px'
}
export default props => (
  <div style={container} className='animated fadeInUp'>
    <Slider {...settings}>
      <div style={slides}>Wil Medina</div>
      <div style={slides}>Software Engineer</div>
      <div style={slides}>Philadelphia, PA</div>
      <div style={slides}>@phtn458</div>
      <div style={slides}>github.com/phtn</div>
    </Slider>
  </div>
)