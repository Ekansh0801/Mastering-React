import React, { useState } from 'react'
import Accordian from './Accordian'

const Men = () => {
  const [open,setOpen] = useState(null);
  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <h1 className='font-bold text-xl mb-5'>Filter Options</h1>
      {
        ["Brand","Mens","Gender","Kids"].map((title,index) => (
          <Accordian key={index} title={title} open={index === open ? true : false} setOpen = {() => setOpen(index)}/>
        ))
      }
    </div>
  )
}

export default Men