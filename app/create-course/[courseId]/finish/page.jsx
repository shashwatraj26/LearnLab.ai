"use client"
import React, { useEffect, useState } from 'react'
import {CourseList} from '/configs/schema'
import {db} from '/configs/db'
import { and , eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CourseBasicInfo from '../_components/CourseBasicInfo'
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

function FinishScreen({params}) {
  const {user}=useUser();
  const [course,setCourse]=useState([]);
  const router=useRouter();
  useEffect(()=>{
    params&&GetCourse();
  },[params,user])
  const GetCourse=async()=>{
    const result =await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
    setCourse(result[0]);
    console.log(result);
    
  }
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
      <h2 className='text-center font-bold text-2xl my-3 text-purple-700 font-serif'>Congrats! Your Lab is equipped with a new Course</h2>
      
      <CourseBasicInfo course={course} refreshData={()=>console.log()
      }/>
      <h2 className='mt-3 text-white'>Course URL:</h2>
      <h2 className='text-center text-gray-700 border p-2 border-slate-700 border-dotted rounded-md flex gap-5 items-center'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId} <HiOutlineClipboardDocumentCheck className='h-8 w-5 text-white cursor-pointer' onClick={async ()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+"/course/view/"+course?.courseId )} /></h2>
    </div>
  )
}

export default FinishScreen