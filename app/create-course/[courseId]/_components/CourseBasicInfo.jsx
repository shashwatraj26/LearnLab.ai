import React, { useState } from 'react'
import Image from 'next/image';
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { Button} from "/components/ui/button"
import EditCourseBasicInfo from "./EditCourseBasicInfo"
import { storage } from '/configs/firebaseConfig'
import {ref,uploadBytes} from 'firebase/storage'
import { snapshot } from 'node:test';

function CourseBasicInfo({course,refreshData}) {

  const [selectedFile,setSelectedFile]=useState();

  /**
   * Select File and upload to firebase storage
   * @param {*} event 
   */
  const onFileSelected=async(event)=>{
    const file=event.target.files[0];
    if(file){
    setSelectedFile(URL.createObjectURL(file));
    const fileName=Date.now()+'.jpg';
    const storageRef=ref(storage,'ai-course/'+fileName)
    await uploadBytes(storageRef,file).then((snapshot)=>{
      console.log('upload completed');
      
    })
    }


  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5 '>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
        <h2 className='text-blue-700 font-bold text-xl'>{course?.courseOutput?.course?.name} <EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/></h2>
        <p className='text-gray-400 text-sm mt-1 font-serif'>{course?.courseOutput?.course?.description}</p>
        <h2 className='text-purple-700 font-serif font-semibold mt-2 flex gap-2 items-center'><HiOutlinePuzzlePiece />{course?.category}</h2>
        <Button className='w-full mt-5'>Start</Button>
        </div>
        <div className='flex justify-end items-start'>
        <div>
          <label htmlFor='upload-image'>
          <Image src={selectedFile?selectedFile:'/placeholder.png'} width={300} height={300} className='w-full rounded-xl h-[250px] object-fill cursor-pointer'/>
          </label>
          <input type='file' id="upload-image" className='opacity-0' onChange={onFileSelected}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default CourseBasicInfo