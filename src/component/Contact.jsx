import React from 'react'

const Contact = () => {
  return (
    <div  className='max-w-[1240px] my-30 mx-auto p-4 h-screen bg-teal-800'>
    <h1 className='text-4xl font-bold my-10 mx-auto text-center p-12'>Let's work together</h1>
    <form className='max-w-[600px] mb-10 mx-auto' action='https://getform.io/f/051ef478-4952-409e-aa5f-eef6664a1411' method='POST'>
        <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg p-3' type="text" name='User' placeholder='Name' />
            <input className='border shadow-lg p-3' type="email" name='Email' placeholder='Email' />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" name='Subject' placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
        <button className='border shadow-lg p-3 w-full mt-2 bg-white'>Submit</button>
    </form>
</div>
  )
}

export default Contact
