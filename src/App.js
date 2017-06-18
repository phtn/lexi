import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Particles from 'react-particles-js'

// style
import './animated.css'
import 'semantic-ui-css/semantic.min.css'
//components
import Profile from './components/profile'
import Info from './components/info'
import Down from './components/down'
import Nav from './components/nav'
import Front from './components/front'
import Back from './components/back'
// svgs
import Shell from './img/seashell.svg'
import LiteDown from './img/down.svg'
import DarkDown from './img/dark-down.svg'
import BlueDown from './img/blue-down.svg'
import WhiteDown from './img/white-down.svg'
import Turtle from './img/turtle.svg'




const profile = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    marginTop: 80,
    display: 'flex', justifyContent: 'center'
}
const info = {
    marginTop: 320,
}
const down = {
    marginTop: 450,
}



const styl = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    display: 'flex', alignItems: 'center',// justifyContent: 'center'
}



class App extends Component {
  componentDidMount(){
    
  }
  render(){
    return(
      <Parallax pages={3} ref='parallax'>
        
        
        
        
        
        {/* ZERO */}
        <Parallax.Layer offset={0} speed={.1} style={{ backgroundColor: '#17202A' }}>
          <Particles 
            height={'100vh'}
            params={{
              particles: {
                number: {
                  value: 100
                },
                color: {
                  value: '#DAF7A6'
                },
                move: {
                  speed: 1
                },
                line_linked: {
                  distance: 50
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onclick: {
                    enable: true,
                    mode: 'repulse'
                  }
                }
              }
            }}
            />
            
            
        </Parallax.Layer>
        <Parallax.Layer
            offset={0}
            speed={1}
            style={profile}
            >
            <Profile />
        </Parallax.Layer>
        <Parallax.Layer
            offset={0}
            speed={2}
            style={info}
            >
            <Info />
        </Parallax.Layer>
        <Parallax.Layer
            offset={0}
            speed={.5}
            style={down}
            >
            <Down image={LiteDown} bg='rgba(33, 47, 61, 0.5)' click={()=> this.refs.parallax.scrollTo(1)}/>
        </Parallax.Layer>
        

        {/* ONE */}
        <Parallax.Layer 
          offset={1} 
          speed={0} 
          style={{ backgroundColor: '#222' }} 
          >
          <Particles 
            height={'100vh'}
            params={{
              particles: {
                number: {
                  value: 100
                },
                color: {
                  value: '#eee'
                },
                move: {
                  speed: 1
                },
                line_linked: {
                  enable: false
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onclick: {
                    enable: true,
                    mode: 'repulse'
                  }
                }
              }
            }}
            />
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={0.2}
        >
           <Nav image={Shell} title={'Front - End'}/>
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={.5}
        >
          <Front />
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={1}
            style={down}
            
            >
            <Down image={WhiteDown} bg='rgba(0, 0, 0, 0.1)' click={()=> this.refs.parallax.scrollTo(2)}/>
        </Parallax.Layer>

        {/* TWO */}
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#0F151B' }}>
          <Particles 
            height={'100vh'}
            params={{
              particles: {
                number: {
                  value: 100
                },
                color: {
                  value: '#0F151B'
                },
                move: {
                  speed: 1
                },
                line_linked: {
                  distance: 120
                },
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onclick: {
                    enable: true,
                    mode: 'repulse'
                  }
                }
              }
            }}
            />
        </Parallax.Layer>
        <Parallax.Layer
            offset={2}
            speed={0.2}
        >
           <Nav image={Turtle} title={'Back - End'}/>
        </Parallax.Layer>
        <Parallax.Layer
            offset={2}
            speed={2}
        >
          <Back />
        </Parallax.Layer>
        <Parallax.Layer
            offset={2}
            speed={.5}
            style={down}
            
            >
            <Down image={BlueDown} bg='rgba(0, 0, 0, 0.1)' click={()=> this.refs.parallax.scrollTo(0)}/>
        </Parallax.Layer>
      </Parallax>
    )
  }
}
  
export default App
