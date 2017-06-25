import React from 'react'
import Slider from 'react-slick'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import FirebaseLogo from '../img/firebase.svg'
import MongoLogo from '../img/mongodb.svg'
import NodejsLogo from '../img/nodejs.svg'

const container = {
  paddingTop: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const card = {
  border: 'transparent',
  borderRadius: 0,
}
const img = {
  height: 30,
  width: 30,
} 
const meta = {
  fontFamily: 'Inconsolata, monospace',
  color: '#999'
}
const header = {
  color: '#777',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
}
const heart = {
  color: 'tomato'
}
const github = {
  color: '#222'
}
const slides = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 300,
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

export default props => (
  <div style={container}>
    <Slider {...settings}>
      <div style={slides}>
    <Card style={card}>
      <Card.Content>
        <Image floated='right' size='mini' src={MongoLogo} style={img} />
        <Card.Header style={header}>
          MongoDB
        </Card.Header>
        <Card.Meta style={meta}>
          Open Source
        </Card.Meta>
        <Card.Description>
          45
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic>
            <Icon style={github} disabled name='github'/>
          </Button>
          <Button basic>
            <Icon style={heart} disabled name='heart'/>
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>

    <div style={slides}>
    <Card style={card}>
      <Card.Content>
        <Image floated='right' size='mini' src={FirebaseLogo} style={img} />
        <Card.Header style={header}>
          Firebase
        </Card.Header>
        <Card.Meta style={meta}>
          Google
        </Card.Meta>
        <Card.Description>
          97
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic>
            <Icon style={github} disabled name='github'/>
          </Button>
          <Button basic>
            <Icon style={heart} disabled name='heart'/>
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>

    <div style={slides}>
    <Card style={card}>
      <Card.Content>
        <Image floated='right' size='mini' src={NodejsLogo} style={img} />
        <Card.Header style={header}>
          NodeJS
        </Card.Header>
        <Card.Meta style={meta}>
          open source
        </Card.Meta>
        <Card.Description>
          97
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic>
            <Icon style={github} disabled name='github'/>
          </Button>
          <Button basic>
            <Icon style={heart} disabled name='heart'/>
          </Button>
        </div>
      </Card.Content>
    </Card>
    </div>

    </Slider>
  </div>
)