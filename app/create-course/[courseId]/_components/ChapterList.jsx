import React from 'react'
import {HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";
import EditChapters from "./EditChapters"

function ChapterList({course,refreshData,edit=true}) {
  return (
    <div>
        <h2 className='font-medium text-xl text-white font-serif'>Chapters</h2>
        <div className='mt-2'>
            {course?.courseOutput?.course?.chapters.map((chapter,index)=>(
                <div key={index} className='border p-5 rounded-lg mb-2 flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <h2 className='bg-blue-700 flex-none h-10 w-10 text-white rounded-full text-center p-2'>{index+1}</h2>
                    <div>
                        <h2 className='font-medium text-lg text-white'>{chapter?.name}{edit&& <EditChapters course={course} index={index} refreshData={refreshData} />}</h2>
                        <p className='text-sm text-gray-500 font-serif'>{chapter?.about}</p>
                        <p className='flex gap-2 text-blue-700 font-serif items-center'><HiOutlineClock />{chapter?.duration}</p>
                    </div>
                    </div>
                    <HiOutlineCheckCircle className='text-3xl text-gray-800 flex-none'/>
                </div>

            ))}
        </div>
    </div>
  )
}

export default ChapterList