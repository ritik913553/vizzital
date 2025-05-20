import React from 'react'

const FeatureCard = ({feature}) => {
  return (
    <div className='mt-20  flex bg-black w-full  gap-x-10 p-20'>
      <div className='w-[70%] flex flex-col justify-between gap-y-10 '>
        <h1 className='text-[6.3vw] leading-23 font-bold'>{feature.heading}</h1>
        <h2 className='text-xl'>{feature.description}</h2>
      </div>
      <div className='w-[20%] flex justify-end items-center  p-6'>
        <img src={`${feature.image}`} alt="" />
      </div>
    </div>
  )
}

export default FeatureCard
