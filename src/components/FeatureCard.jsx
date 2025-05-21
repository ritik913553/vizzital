import React from 'react'

const FeatureCard = ({feature}) => {
  return (
    <div className='mt-20  flex flex-col sm:flex-row bg-black w-full  gap-x-10 sm:p-20 p-5 py-7'>
      <div className='sm:w-[70%] w-full flex flex-col justify-between sm:gap-y-10 gap-y-6'>
        <h1 className='sm:text-[6.3vw] text-[7.5vw] sm:leading-23 font-black sm:font-bold'>{feature.heading}</h1>
        <h2 className='text-xl opacity-90 sm:opacity-100'>{feature.description}</h2>
      </div>
      <div className='sm:w-[20%]  flex justify-center sm:justify-end items-center  sm:p-6 pt-7'>
        <img className='h-30 sm:h-full' src={`${feature.image}`} alt="" />
      </div>
    </div>
  )
}

export default FeatureCard
