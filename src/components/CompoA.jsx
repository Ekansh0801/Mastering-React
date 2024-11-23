import React from 'react'
import CompoB from './CompoB'

const CompoA = () => {
    // const user = {
    //     name:'Ekansh',
    //     email:'ekanshaggarwal01112003@gmail.com'
    // }
  return (
    <div className='max-w-5xl mx-auto'>
        <h1>CompoA</h1>
        <CompoB />
    </div>
  )
}

export default CompoA