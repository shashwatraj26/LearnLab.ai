import React from 'react'
import { HiOutlineClock } from 'react-icons/hi2'
function ChapterListCard({chapter,index}) {
  return (
    <div className='grid grid-cols-5 p-4 items-center border-b'>
        <div>
            <h2 className='p-1 w-8 h-8 bg-purple-600 text-white rounded-full text-center'>{index+1}</h2>
        </div>
        <div className='col-span-4'>
            <h2 className='font-medium text-gray-700' >{chapter?.name}</h2>
            <h2 className='flex items-center gap-2 text-sm text-purple-700 font-serif'><HiOutlineClock/>{chapter?.duration}</h2>
        </div>
    </div>
  )
}

export default ChapterListCard