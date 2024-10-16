import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi2";
import { HiOutlineClock,HiOutlineBookOpen,HiOutlinePlayCircle } from "react-icons/hi2";


function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'> 
        <div className='flex gap-2'>
        <HiOutlineChartBar className='text-5xl text-blue-700'/>
        <div>
        <h2 className='text-xs text-gray-500 font-serif'>Skill Level</h2>  
        <h2 className='font-medium text-lg font-serif text-white'>{course?.level}</h2>
        </div>
        </div>  
        <div className='flex gap-2'>
        <HiOutlineClock className='text-5xl text-blue-700'/>
        <div>
        <h2 className='text-xs text-gray-500 font-serif'>Duration</h2>  
        <h2 className='font-medium text-lg font-serif text-white'>{course?.courseOutput?.meta?.duration}</h2>
        </div>
        </div>  
        <div className='flex gap-2'>
        <HiOutlineBookOpen className='text-5xl text-blue-700'/>
        <div>
        <h2 className='text-xs text-gray-500 font-serif'>No Of Chapters</h2>  
        <h2 className='font-medium text-lg font-serif text-white'>{course?.courseOutput?.meta?.noOfChapters}</h2>
        </div>
        </div>  
        <div className='flex gap-2'>
        <HiOutlinePlayCircle className='text-5xl text-blue-700'/>
        <div>
        <h2 className='text-xs text-gray-500 font-serif'>Video Included?</h2>  
        <h2 className='font-medium text-lg font-serif text-white'>{course?.includeVideo}</h2>
        </div>
        </div>  
        </div>
    </div>
  )
}

export default CourseDetail