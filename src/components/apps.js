import React from 'react'
import Slider from 'react-slick'
// eslint-disable-next-line
import { Card, Image, Icon, Button, Input, Label, Form, Grid, Divider } from 'semantic-ui-react'
import Human from '../img/human.svg'
import Plus from '../img/plus.svg'
import Minus from '../img/minus.svg'

const container = {
  paddingTop: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '0px'
}
const card = {
  border: '0px solid red',
  borderRadius: 3,
  backgroundColor: 'rgba(0,0,0,0.2)',
  height: 370,
}
const titleContent = {
  maxHeight: 60,
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(128, 128, 128, 0.3)'
}
const content = {
  maxHeight: 100,
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(128, 128, 128, 0.5)'
}
const img = {
  height: 25,
  width: 25,
  pointerEvents: 'none',
}
const header = {
  color: '#777',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
}
const meta = {
  fontFamily: 'Inconsolata, monospace',
  color: '#999'
}
const likes = {
  color: '#777',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 14,
  fontWeight: 100,
}
const slider = {
  border: '0px solid red'
}
const slides = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  padding: 5
}
const settings = {
  arrows: false,
  infinite: false,
  speed: 500,
  vertical: true,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
  draggable: false
}
const button = {
  //width: 60, #32CD32 #483D8B
  //textAlign: 'center',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
}
const label = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 25,
  padding: 0,
  fontWeight: 100,
  backgroundColor: 'transparent',
  width: '100%',
  color: '#E0FFFF'
}
const labelGrid = {
  display: 'flex',
  alignItems: 'center'
}
const field = {
  backgroundColor: '#eee'
}



export default props => (
  <div style={container}>
    <Slider {...settings} style={slider}>
      
      <div style={slides}>
        <Card style={card}>
          <Card.Content style={titleContent}>
            <Image floated='right' size='mini' src={Human} style={img} />
            <Card.Header style={header}>
              BMI
            </Card.Header>
            <Card.Meta style={meta}>
              coming soon
            </Card.Meta>
          </Card.Content>
            
          <Card.Content style={content}>
            <label style={header}>Weight  <strong>lbs</strong> </label>
            <Grid columns={3}>
              <Grid.Column>
              <Button 
                style={button}
                onClick={props.weightMinus}
                onTouchStart={props.weightMinusOn}
                onTouchEnd={props.weightMinusOff}
                onMouseDown={props.weightMinusOn}
                onMouseUp={props.weightMinusOff}
              >
                <Image disabled shape='rounded' size='mini' src={Minus} style={img} />
              </Button>
              </Grid.Column>
              <Grid.Column style={labelGrid}>
              <Button style={label}>
                {props.weight}
              </Button>
              </Grid.Column>
              <Grid.Column>
              <Button 
                style={button}
                onClick={props.weightPlus}
                onTouchStart={props.weightPlusOn}
                onTouchEnd={props.weightPlusOff}
                onMouseDown={props.weightPlusOn}
                onMouseUp={props.weightPlusOff}
                
              >
                <Image disabled shape='rounded' size='mini' src={Plus} style={img} />
              </Button>
              </Grid.Column>
            </Grid>
                
          </Card.Content>


          <Card.Content style={content}>
            <label style={header}>Height  <strong>ft in</strong> </label>
            <Grid columns={3}>
              <Grid.Column>
              <Button 
                style={button}
                  onClick={props.heightMinus}
                  onTouchStart={props.heightMinusOn}
                  onTouchEnd={props.heightMinusOff}
                  onMouseDown={props.heightMinusOn}
                  onMouseUp={props.heightMinusOff}
              >
                <Image disabled shape='rounded' size='mini' src={Minus} style={img} />
              </Button>
              </Grid.Column>
              <Grid.Column style={labelGrid}>
              <Button style={label}>
                <strong>5 </strong>' 6"
              </Button>
              </Grid.Column>
              <Grid.Column>
              <Button 
                style={button}
                onClick={props.heightPlus}
                onTouchStart={props.heightPlusOn}
                onTouchEnd={props.heightPlusOff}
                onMouseDown={props.heightPlusOn}
                onMouseUp={props.heightPlusOff}
              >
                <Image disabled shape='rounded' size='mini' src={Plus} style={img} />
              </Button>
              </Grid.Column>
            </Grid>
                
          </Card.Content>

          
          
          <Card.Content extra>
            <div className='ui two buttons'>
              
            </div>
          </Card.Content>
        </Card>
      </div>

    

    </Slider>
  </div>
)