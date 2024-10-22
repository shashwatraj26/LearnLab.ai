"use client"
import React, { useEffect, useState } from 'react'
import {CourseList} from '/configs/schema'
import {db} from '/configs/db'
import { and , eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '/components/ui/button';
import {GenerateChapterContent_AI} from '/configs/AiModel'
import LoadingDialog from '../_components/LoadingDialog'
import uuid4 from 'uuid4';
import { index } from 'drizzle-orm/mysql-core'
import service from '/configs/service'
import { useRouter } from 'next/navigation'
import {Chapters} from '/configs/schema'

function CourseLayout({params}) {
  const {user}=useUser();
  const [course,setCourse]=useState([]);
  const [loading,setLoading]=useState(false);
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

  const GenerateChapterContent=()=>{
    setLoading(true);
    const chapters=course?.courseOutput?.course?.chapters;
    chapters.forEach(async(chapter,index)=>{
      const PROMPT='Explain the concept in Detail on Topic:'+course?.name+', Chapter:'+chapter?.name+', as a list of array with only 3 fields i.e. title, explanation on given chapter in detail and CodeExample(Code field in <precode> format) only when code is applicable.'
      console.log(PROMPT);
      if(index < 30){
        try{
          let videoId='';
          //Generate Video URl
          service.getVideos(course?.name+':'+chapter?.name).then(resp=>{
            console.log(resp);
            videoId=resp[0]?.id?.videoId
          })
          //generate chapter content
          const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
          console.log(result?.response?.text());
          const content=JSON.parse(result?.response?.text());
          
          //save chapter content + video URL
          await db.insert(Chapters).values({
            chapterId:index,
            courseId:course?.courseId,
            content:content,
            videoId:videoId
          })
        }
        catch(e){
          setLoading(false);
            console.log(e);
        }
        await db.update(CourseList).set({
          publish:true
        })
        setLoading(false);
        router.replace('/create-course/'+course?.courseId+"/finish");
      }
    })
  }
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-4xl text-purple-700 '>COURSE LAYOUT</h2>

      <LoadingDialog loading={loading} />
      {/*Basic Info*/}
      <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>
      {/*Course Detail*/}
      <CourseDetail course={course}/>

      {/*List of Lesson*/}
      <ChapterList course={course} refreshData={()=>GetCourse()}/>

        <Button className='my-10' onClick={GenerateChapterContent}>Generate Course Content</Button>
    </div>
  )
}

export default CourseLayout