import React from 'react'
import Image from 'next/image';
import { Button } from '/components/ui/button'
import Link from 'next/link';
function Header() {
  return (
    <div className='bg-white flex justify-between p-5 shadow-[0_10_10px_rgba(255,255,255,1)]'>
      <div className='flex'>
      <Link href='/dashboard'>
      <Image src={'/Logo.png'} width={50} height={50} />
      </Link>
      <h1 className="border-separate bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-serif text-transparent sm:text-2.5xl "> LearnLab.ai</h1>
      </div>
      <Link href='/dashboard'>
      <Button className="hidden md:block shadow-[0_4px_15px_rgba(255,255,255,0.3)]">Get Started</Button>
      </Link>
    </div>
  )
}

export default Header