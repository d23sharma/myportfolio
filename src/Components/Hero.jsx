import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import HeroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8'>
            <article>
                <h1 className='font-bold text-6xl tracking-wider'>I am Deepak</h1>
                <p className='mt-5 tracking-wide capitalize text-3xl text-slate-700'>a full stack developer</p>
                <p className='mt-2 tracking-wide text-lg text-slate-700 capitalize'>Turning ideas into interactive realities</p>
                <div className='flex gap-x-4 mt-4'>
                    <a href='https://github.com/d23sharma'>
                    <FaGithubSquare className='h-8 w-8 text-slate-600 mt-4 gap-4 hover:text-emerald-700 duration-300'/>
                    </a>
                    <a href='https://www.linkedin.com/in/deepak23sharma/'>
                    <FaLinkedin className='h-8 w-8 text-slate-600 mt-4 gap-4 hover:text-emerald-700 duration-300'/>
                    </a>
                    <a href='https://twitter.com/Deepaksha23?t=6-bULp4gxf3Qati6mtpl8w&s=08'>
                    <FaTwitterSquare className='h-8 w-8 text-slate-600 mt-4 gap-4 hover:text-emerald-700 duration-300'/>
                    </a>
                </div>
            </article>
            <article className='hidden md:block'> 
                <img src={HeroImg} className='h-80 md:h-96' />
            </article>
        </div>
    </div>
  )
}

export default Hero
