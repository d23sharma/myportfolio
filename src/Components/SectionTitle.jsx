import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className='border-b border-gray-200 pb-5'>
      <h1 className='text-3xl capitalize font-medium tracking-wider'>{text}</h1>
    </div>
  )
}

export default SectionTitle