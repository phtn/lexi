import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import Palette from '../img/pantone.svg'
const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 400
}
const header = {
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 500,
  fontSize: 22,
  lineHeight: '30px'
}
const roboto = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
}
const launch = {
  borderRadius: 0
}
const card = {
  borderRadius: 0,
  border: '0px'
}
export default props => (
  <div style={container}>
    <Card style={card}>
    
    <Card.Content>
      <Image floated='left' src={Palette} height={40}/>
      <Card.Header style={header} >Palette Picker</Card.Header>
      <Card.Meta style={roboto}>v0.2.3</Card.Meta>
      <Card.Description style={card}>colors from hundreds of artists </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
      <a href='https://reactjsapps.herokuapp.com'>
        <div className='ui one'>
        <Button fluid color='teal' style={launch}> Launch &nbsp;&nbsp;&nbsp;<Icon name='rocket'/></Button>        
        </div>
      </a>
    </Card.Content>
  </Card>
  </div>
)