import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='bg-white flex justify-between p-4 shadow-[0_10_10px_rgba(255,255,255,1)]'>
        <div className=' bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-serif text-transparent sm:text-2.5xl'>
            LearnLab.ai
        </div>
        <UserButton/>
    </div>
  )
}

export default Header