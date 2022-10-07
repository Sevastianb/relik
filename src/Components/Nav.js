import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='z-10 grid grid-cols-2 border-b w-full border-white/10 sticky top-0 backdrop-blur-md'>
      <Link to="/"><img src="/img/logo.png" alt="" className="h-20" /></Link>
      <div className='hidden md:flex items-center justify-end'>
        <Link to="/" className='mr-5'>Home</Link>
        {/* <Link to="/" className='mr-5'>Metawerse Work</Link> */}
        <Link to="/contact" className='mr-5'>Contact Us</Link>
      </div>
    </div>
  )
} 