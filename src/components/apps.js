import React from 'react'
import Slider from 'react-slick'
// eslint-disable-next-line
import { Card, Image, Icon, Button, Input, Label, Form } from 'semantic-ui-react'
import Human from '../img/human.svg'

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
const content = {
  border: '0px',
  marginBottom: -10
}
const img = {
  height: 30,
  width: 30,
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
  infinite: true,
  speed: 500,
  vertical: true,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
}
const inputLabel = {
  width: 70,
  textAlign: 'center',
  fontSize: 20,
  cursor: 'pointer',
}
const input = {
  width: 50,
  textAlign: 'center',
  color: 'teal',
  fontSize: 20
}

export default props => (
  <div style={container}>
    <Slider {...settings} style={slider}>
      
      <div style={slides}>
        <Card style={card}>
          <Card.Content style={content}>
            <Image floated='right' size='mini' src={Human} style={img} />
            <Card.Header style={header}>
              BMI
            </Card.Header>
            <Card.Meta style={meta}>
              check where you ranked!
            </Card.Meta>
          </Card.Content>
            
          <Card.Content>
            <Form>
              <Form.Field>
                <label style={header}>Weight  <strong>lbs</strong> </label>
                <Input labelPosition='right'>
                  <Label 
                    style={inputLabel}
                    onClick={props.weightMinus}
                    onTouchStart={props.weightMinusOn}
                    onTouchEnd={props.weightMinusOff}
                    onMouseDown={props.weightMinusOn}
                    onMouseUp={props.weightMinusOff}
                  >-</Label>
                  <input disabled style={input} value={props.weight}/>
                  <Label 
                    style={inputLabel}
                    onClick={props.weightPlus}
                    onTouchStart={props.weightPlusOn}
                    onTouchEnd={props.weightPlusOff}
                    onMouseDown={props.weightPlusOn}
                    onMouseUp={props.weightPlusOff}
                    
                  >+</Label>
                </Input>
              </Form.Field>

              <Form.Field>
                <label style={header}>Height  <strong>ft in</strong> </label>
                <Input labelPosition='right'>
                  <Label 
                    style={inputLabel}
                    onClick={props.heightMinus}
                    onTouchStart={props.heightMinusOn}
                    onTouchEnd={props.heightMinusOff}
                    onMouseDown={props.heightMinusOn}
                    onMouseUp={props.heightMinusOff}
                  >-</Label>
                  <input disabled style={input} value={props.height}/>
                  <Label 
                    style={inputLabel}
                    onClick={props.heightPlus}
                    onTouchStart={props.heightPlusOn}
                    onTouchEnd={props.heightPlusOff}
                    onMouseDown={props.heightPlusOn}
                    onMouseUp={props.heightPlusOff}
                    
                  >+</Label>
                </Input>
              </Form.Field>

            </Form>
          </Card.Content>
          
          <Card.Content extra>
            <div className='ui two buttons'>
              
              <Button
                style={likes}
                inverted
                color='grey'
                content=''
                icon='heart'
                label={{ color: 'grey', basic: true, pointing: 'right', content: 'Likes  ' + props.likes }}
                labelPosition='left'
                onClick={props.like}
              />
            </div>
          </Card.Content>
        </Card>
      </div>

    

    </Slider>
  </div>
)