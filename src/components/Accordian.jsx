import React, { useState } from 'react'
import ListItems from './ListItems'

const Accordian = ({title,open,setOpen}) => {

    

  return (
    <div className='mt-5 w-64 shadow-md border border-gray-200 px-4 py-2'>
        <div className='flex justify-between '>
        <h1>{title}</h1>
        <button onClick={() => {setOpen(!open)}} className='bg-black text-white px-2 rounded-md'>{open === false ? 'Show' : 'Hide'}</button>
        </div>
        {
            open && <ListItems/>
        }
    </div>
  )
}

export default Accordian