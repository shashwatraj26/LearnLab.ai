import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div>
      <Image src={'/Logo.jpg'} width={200} height={100}/>
      <Button>Get Started</Button>
    </div>
  )
}

export default Header