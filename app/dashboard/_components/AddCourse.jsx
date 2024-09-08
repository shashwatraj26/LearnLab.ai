'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import {Button} from '/components/ui/button'
import Link from 'next/link';
function AddCourse() {
    const {user}=useUser();
  return (
    <div className='flex items-center justify-between'>
    <div>
        <h2 className='text-3xl text-blue-600'>Hello, <span className='text-purple-500'>{user?.fullName}</span></h2>
        <p className='text-sm text-gray-400'>Create new Course with AI, share with friends.</p>
    </div>
    <Link href={'/create-course'}>
    <Button>Create Course</Button>
    </Link>
    </div>
  )
}

export default AddCourse