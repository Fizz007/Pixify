import Hero from '@/component/Hero'
import React from 'react'
import Contact from '@/component/Contact'

const contact = () => {
  return (
    <div>
      <Hero heading='Contact' message='Submit the form below for more work or any quiery'/>
      
      <Contact/>
    </div>
  )
}

export default contact
