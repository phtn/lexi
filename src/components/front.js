import React from 'react'
import Slider from 'react-slick'

import { Card, Image, Icon, Button } from 'semantic-ui-react'
import ReactLogo from '../img/react.svg'
import ReduxLogo from '../img/redux.svg'
import VueLogo from '../img/vue.svg'
import SemanticLogo from '../img/semantic-ui.svg'
const container = {
  padding: '150px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const card = {
  border: 'transparent',
  borderRadius: 0,
  barckgroundColor: '#555'
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
  
}
const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
}

export default props => (
  <div style={container}>
    <Slider {...settings}>
      <div style={slides}>
    <Card style={card} color='grey'>
      <Card.Content>
        <Image floated='right' size='mini' src={ReduxLogo} style={img} />
        <Card.Header style={header}>
          Redux
        </Card.Header>
        <Card.Meta style={meta}>
          Dan Abramov
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
        <Image floated='right' size='mini' src={ReactLogo} style={img} />
        <Card.Header style={header}>
          React
        </Card.Header>
        <Card.Meta style={meta}>
          Dan Abramov
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
        <Image floated='right' size='mini' src={VueLogo} style={img} />
        <Card.Header style={header}>
          Vue
        </Card.Header>
        <Card.Meta style={meta}>
          Vuejs.org
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
        <Image floated='right' size='mini' src={SemanticLogo} style={img} />
        <Card.Header style={header}>
          Semantic UI
        </Card.Header>
        <Card.Meta style={meta}>
          TechnologyAdvice
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