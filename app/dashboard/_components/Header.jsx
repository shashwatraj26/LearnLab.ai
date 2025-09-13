import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
function Header() {
  return (
    <div className='bg-white flex justify-between p-2 shadow-[0_10_10px_rgba(255,255,255,1)]'>
      <Link href='/dashboard'>
        <Image src={'/Logo.png'} width={50} height={50}/>
        </Link>
        <UserButton/>
    </div>
  )
}

export default Header