import React from 'react'
import Profile from './Profile'
import ProfileClass from './ProfileClass'

const About = () => {
  return (
    <div>
        <Profile name='Ekansh' address='fardiabad' email='ekansh@gmail.com'/>
        <ProfileClass name='MERN' address='Server' email='mern@gmail.com'/>
    </div>
    
  )
}

export default About