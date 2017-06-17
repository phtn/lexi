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
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 18
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