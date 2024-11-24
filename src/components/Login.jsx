import React, { useState } from 'react'
import { set, z } from 'zod'

const loginSchema = z.object({
    email:z.string().email('Invalid email address'),
    password:z.string().min(6,'Password must be atleast 6 characters long')
})

const Login = () => {

    const [formData,setFormData] = useState({
        email:'',
        password:''
    });

    const [error,setErros] = useState({});

    const changeHandler = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);

        const result = loginSchema.safeParse(formData);
        if(!result.success){
            const errorField = result.error.formErrors.fieldErrors;
            setErros(errorField);
            return;
        }

    }
  return (
    <div className='flex items-center justify-center h-[80vh] bg-[#f0f0f0f0]'>
        <form onSubmit={submitHandler} className='flex flex-col gap-10 bg-white p-10 rounded-lg shadow-md w-[40%]'>
            <div className='flex flex-col'>
            <input name='email' value={formData.email} onChange={changeHandler} className='border border-gray-500 px-3 py-2 rounded-md' type='email' placeholder='enter you email'/>
            <span className='text-xs text-red-600'>{error && error.email}</span>
            </div>
            <div className='flex flex-col'>
            <input name='password' value={formData.password} onChange={changeHandler} className='border border-gray-500 px-3 py-2 rounded-md' type='password' placeholder='enter your password'/>
            <span className='text-xs text-red-600'>{error && error.password}</span>
            </div>
            <button className='bg-purple-600 py-2 rounded-md text-white '>LOGIN</button>
        </form>
    </div>
  )
}

export default Login