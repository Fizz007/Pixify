import Hero from '@/component/Hero'
import Portfolio from '@/component/Portfolio'
import React from 'react'

const work = () => {
  return (
    <div>
      <Hero heading='My work' message='This is some of work done by visiting various place around the world'/>
      <Portfolio/> 
    </div>
  )
}

export default work
