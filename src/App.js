import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Particles from 'react-particles-js'

import './animated.css'
//components
import Profile from './components/profile'
import Info from './components/info'
import Tech from './components/tech'


const styles = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
}
const profile = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    marginTop: 80,
    display: 'flex', justifyContent: 'center'
}
const info = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    marginTop: 320,
}
const tech = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    marginTop: 450,
}
const styl = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    color: '#CCC',
    display: 'flex', alignItems: 'center',// justifyContent: 'center'
}
const div = {
  height: 100,
  width: 100,
  backgroundColor: 'tomato',
  borderRadius: 5,
}
const circle = {
  height: 100,
  width: 100,
  backgroundColor: 'papayawhip',
  borderRadius: 100,
}


class Index extends Component {
  componentDidMount(){
    
  }
  render(){
    return(
      <Parallax pages={3} ref='parallax'>
        
        
        
        
        
        {/* ZERO */}
        <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#17202A' }}>
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
            offset={0}
            speed={0.2}
            style={profile}
            >
            <Profile />
        </Parallax.Layer>
        <Parallax.Layer
            offset={0}
            speed={0.5}
            style={info}
            >
            <Info />
        </Parallax.Layer>
        <Parallax.Layer
            offset={0}
            speed={0.5}
            style={tech}
            >
            <Tech click={()=> this.refs.parallax.scrollTo(1)}/>
        </Parallax.Layer>
        

        {/* ONE */}
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#1C2833' }} />
        <Parallax.Layer
            offset={1}
            speed={.2}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(2)}>
            <div style={div}></div>
        </Parallax.Layer>
        

        {/* TWO */}
        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#212F3D' }} />
        <Parallax.Layer
            offset={1}
            speed={.5}
            style={styl}
            onClick={() => this.refs.parallax.scrollTo(2)}>
            <div style={circle}></div>
        </Parallax.Layer>

        <Parallax.Layer
            offset={2}
            speed={0.2}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}>
            LET'S GO!
        </Parallax.Layer>
      </Parallax>
    )
  }
}
  
export default Index
