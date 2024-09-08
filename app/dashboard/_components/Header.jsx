import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='bg-white flex justify-between p-2 shadow-[0_10_10px_rgba(255,255,255,1)]'>
        <img src='Logo.png' width={50} height={50}/>
        <UserButton/>
    </div>
  )
}

export default Header