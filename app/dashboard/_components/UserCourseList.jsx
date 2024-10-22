"use client"
import React, { useContext, useEffect, useState } from 'react'
import{ db } from '/configs/db';
import { CourseList} from "/configs/schema";
import { eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import CourseCard from "./CourseCard"
import { UserCourseListContext } from '../../_context/UserCourseListContext';
function UserCourseList() {

  const {usercourseList,setUserCourseList} =useContext(UserCourseListContext)
  const [courseList,setCourseList]=useState();
  const {user}=useUser();

  useEffect(()=>{
    user&&getUserCourses();
  },[user]);

  const getUserCourses=async()=>{const result=await db.select().from(CourseList).where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress))
    console.log(result);
    setCourseList(result);
    setUserCourseList(result);
    
  }
  return (
    <div className='mt-10'>
      <h2 className='font-medium text-xl text-blue-600'>My Courses</h2>
      <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {courseList?.length>0?courseList?.map((course,index)=>(
          <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
        ))
      :
        [1,2,3,4,5].map((item,index)=>(
          <div key={index} className='w-full mt-5 bg-slate-600 animate-pulse rounded-lg h-[270px]'>

          </div>
        ))
      }
      </div>
    </div>
  )
}

export default UserCourseList