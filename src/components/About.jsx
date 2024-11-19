import React from 'react'
import Profile from './Profile'
import ProfileClass from './ProfileClass'
import { Component } from 'react'

const About = () => {
  return (
    <div>
        <Profile name='Ekansh' address='fardiabad' email='ekansh@gmail.com'/>
        <ProfileClass name='MERN' address='Server' email='mern@gmail.com'/>
    </div>
    
  )
}

// export default About

class AboutClass extends Component{
  constructor(){
    super();
    console.log('Parent cnst called!!')
  }

  componentDidMount(){
    console.log('Parent compnentDidMount Called!!!');
  }

  render(){
    console.log('Parent render called!!!')
    return(
      <ProfileClass name="keshav" address="Pune" email="keshav@gmail.com"/>
    )
  }
}

export default AboutClass; 