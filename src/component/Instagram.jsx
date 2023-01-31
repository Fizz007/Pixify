import React from 'react'
import Img1 from '../../public/assets/ig-img-1.jpeg'
import Img2 from '../../public/assets/ig-img-2.jpeg'
import Img3 from '../../public/assets/ig-img-3.jpeg'
import Img4 from '../../public/assets/ig-img-4.jpeg'
import Img5 from '../../public/assets/ig-img-5.jpeg'
import Img6 from '../../public/assets/ig-img-6.jpeg'
import Instagramimg from './Instagramimg'


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>Pixify</p>
      <div className='grid geid-cols-2 md:grid-cols-3 lg: grid-cols-6 gap-2 p-4'>
        <Instagramimg socialImg = {Img1}/>
        <Instagramimg socialImg = {Img2}/>
        <Instagramimg socialImg = {Img3}/>
        <Instagramimg socialImg = {Img4}/>
        <Instagramimg socialImg = {Img5}/>
        <Instagramimg socialImg = {Img6}/>
      </div>
    </div>
  )
}

export default Instagram
