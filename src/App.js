import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Particles from 'react-particles-js'

// style
import './animated.css'
import 'semantic-ui-css/semantic.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//components
import Profile from './components/profile'
import Info from './components/info'
import Down from './components/down'
import Nav from './components/nav'
//import Front from './components/front'
import Back from './components/back'
import Apps from './components/apps'
// svgs
import Shell from './img/seashell.svg'
import LiteDown from './img/down.svg'
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


let interval


class App extends Component {
  state = {
    oneDownSize: 40,
    profileSize: 200,
    bmiLikes: 0,
    weight: 120,
    weightPlus: false,
    weightMinus: false,
  }
  componentDidMount(){
    
  }
  handleDown(p){
    this.refs.parallax.scrollTo(p)
  }
  incBMIlikes(){
    this.setState({bmiLikes: this.state.bmiLikes + 1})
  }
  weightPlus(){
    this.setState({weight: this.state.weight + 1})
  }
  weightMinus(){
    this.setState({weight: this.state.weight - 1})
  }
  addWeight(weight){
    if(weight < 400){
      interval = setInterval(t=> {
        this.setState({weight: this.state.weight + 1})
      },1)
    }
  }
  subtractWeight(weight){
    if (weight >= 0){
      interval = setInterval(t=> {
        this.setState({weight: this.state.weight - 1})
      },1)
    }
  }
  weightPlusOff(){
    clearInterval(interval)
  }
  weightPlusOn(){
    this.setState({weightPlus: true}, ()=> this.addWeight(this.state.weight))
    
  }
  weightMinusOn(){
    this.setState({weightPlus: true}, ()=> this.subtractWeight(this.state.weight))
  }
  weightMinusOff(){
    clearInterval(interval)
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
                detect_on: 'window',
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
            <Profile size={this.state.profileSize} opacity={this.state.profileOpacity} />
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
            <Down image={LiteDown} bg='rgba(33, 47, 61, 0.5)' 
            click={()=> this.handleDown(1)}
            size={this.state.oneDownSize}
            />
        </Parallax.Layer>
        

        {/* ONE */}
        <Parallax.Layer 
          offset={1} 
          speed={1} 
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
                detect_on: 'window',
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
           <Nav image={Shell} title={'Apps'}/>
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={1}
        >
          <Apps 
            likes={this.state.bmiLikes} 
            like={()=> this.incBMIlikes()} 
            weight={this.state.weight}
            weightPlus={()=> this.weightPlus()}
            weightPlusOn={()=> this.weightPlusOn()}
            weightPlusOff={()=> this.weightPlusOff()}
            weightMinus={()=> this.weightMinus()}
            weightMinusOn={()=> this.weightMinusOn()}
            weightMinusOff={()=> this.weightMinusOff()}
            />
          
        </Parallax.Layer>
        <Parallax.Layer
            offset={1}
            speed={0.7}
            style={down}
            
            >
            <Down image={WhiteDown} 
              bg='rgba(0, 0, 0, 0.1)' 
              size={this.state.oneDownSize} 
              click={()=> this.handleDown(2)}/>
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
                  distance: 20
                },
              },
              interactivity: {
                detect_on: 'window',
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
            speed={0.7}
            style={down}
            
            >
            <Down image={BlueDown} 
              bg='rgba(0, 0, 0, 0.1)' 
              size={this.state.oneDownSize} 
              click={()=> this.handleDown(0)}/>
        </Parallax.Layer>
      </Parallax>
    )
  }
}
  
export default App
