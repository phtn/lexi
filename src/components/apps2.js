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
  fontSize: 22,
  lineHeight: '30px'
}
export default props => (
  <div style={container}>
    <Card>
    
    <Card.Content>
      <Image floated='<left></left>' src={Palette} height={40}/>
      <Card.Header style={header} >Palette Picker</Card.Header>
      <Card.Meta>v0.2.3</Card.Meta>
      <Card.Description>colors from hundreds of artists </Card.Description>
    </Card.Content>
    <Card.Content extra>
      
      <a href='https://reactjsapps.herokuapp.com'>
        <div className='ui one'>
        <Button fluid color='teal'> Launch &nbsp;&nbsp;&nbsp;<Icon name='rocket'/></Button>        
        </div>
      </a>
    </Card.Content>
  </Card>
  </div>
)