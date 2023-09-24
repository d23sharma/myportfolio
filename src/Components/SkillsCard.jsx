import React from 'react'

const SkillsCard = ({title, icon, text}) => {
  return (
    <article className='px-2'>
        <span >{icon}</span>
        <h4 className='text-2xl my-3 '>{title}</h4>
        <p className='mb-10 text-slate-700'>{text}</p>
    </article>
  )
}

export default SkillsCard