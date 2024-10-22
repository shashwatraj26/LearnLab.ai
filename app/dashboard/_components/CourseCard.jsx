import React from 'react'
import Image from 'next/image'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { HiMiniEllipsisVertical } from 'react-icons/hi2'
import DropdownOption from "./DropdownOption"
import {CourseList} from '/configs/schema';
import {eq} from 'drizzle-orm';
import {db} from '/configs/db';
import Link from 'next/link'

function CourseCard({course,refreshData,displayUser=false}) {
  const handleOnDelete=async()=>{
    const resp=await db.delete(CourseList).where(eq(CourseList.id,course?.id)).returning({id:CourseList?.id})
    if(resp){
      refreshData(true);
    }
  }
  return (
    <div className='shadow-sm rounded-lg  bg-gray-800 hover:scale-105 transition-all cursor-pointer mt-4'>
      <Link href={'/course/'+course?.courseId}>
      <Image src={course?.courseBanner} width={300} height={200} className='w-full h-[200px] rounded-lg'/>
      </Link>
      <div className='p-2 '>
        <h2 className='font-medium text-lg text-blue-700'>
          {course?.courseOutput?.course?.name}
          <DropdownOption
          handleOnDelete={()=>handleOnDelete()}
          >
          <HiMiniEllipsisVertical/>
          </DropdownOption>
        </h2>
        <p className='text-sm text-gray-700 font-serif my-2'>{course?.category}</p>
        <div className='flex items-center justify-between'>
          <h2 className='flex gap-2 items-center p-1  text-purple-700 font-serif text-sm'><HiOutlineBookOpen/>{course?.courseOutput?.meta?.noOfChapters} Chapters</h2>
          <h2 className='text-sm p-1 text-purple-700 font-serif rounded-sm'>{course?.level}</h2>
        </div>
      </div>
    </div>
  )
}

export default CourseCard