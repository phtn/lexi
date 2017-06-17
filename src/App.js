import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Particles from 'react-particles-js'

import './animated.css'
//components
import Profile from './components/profile'
import Info from './components/info'
import Down from './components/down'
import Nav from './components/nav'
import Front from './components/front'
// svgs
import Shell from './img/shell.svg'
import Chick from './img/chick.svg'
import DownImage from './img/down.svg'



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
            <Down image={DownImage} click={()=> this.refs.parallax.scrollTo(1)}/>
        </Parallax.Layer>
        

        {/* ONE */}
        <Parallax.Layer offset={1} speed={.1} style={{ backgroundColor: '#111' }} >
          <Particles 
            height={'100vh'}
            params={{
              particles: {
                number: {
                  value: 100
                },
                color: {
                  value: '#FF5733'
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
           <Nav image={Shell} title={'Front - End Technologies'}/>
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={2}
        >
          <Front />
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={.5}
            style={down}
            
            >
            <Down image={DownImage} click={()=> this.refs.parallax.scrollTo(2)}/>
        </Parallax.Layer>

        {/* TWO */}
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#212F3D' }} />
        <Parallax.Layer
            offset={2}
            speed={0.2}
        >
           <Nav image={Chick} title={'Back - End Technologies'}/>
        </Parallax.Layer>
        <Parallax.Layer
            offset={2}
            speed={2}
            style={styl}
        >
          
        </Parallax.Layer>
        <Parallax.Layer
            offset={2}
            speed={.5}
            style={down}
            
            >
            <Down image={DownImage} click={()=> this.refs.parallax.scrollTo(0)}/>
        </Parallax.Layer>
      </Parallax>
    )
  }
}
  
export default App
