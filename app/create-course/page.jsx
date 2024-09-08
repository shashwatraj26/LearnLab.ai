'use client'
import React, { useState } from 'react'
import {HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2} from "react-icons/hi2";
import {Button} from '/components/ui/button'
function CreateCourse() {
    const StepperOptions=[
        {
        id:1,
        name:'Category',
        icon:<HiMiniSquares2X2/>
    },
    {
        id:2,
        name:'Topic & Desc',
        icon:<HiLightBulb/>
    },
    {
        id:3,
        name:'Options',
        icon:<HiClipboardDocumentCheck/>
    },
]
    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div>
        {/* Stepper */}
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-4xl text-white font-medium'>
                Create Course
            </h2><div className='flex mt-10 '>
             {StepperOptions.map((item,index)=>(
                <div key={item} className='flex items-center'>
                    <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                    <div className={`bg-black p-3 rounded-full text-white 
                    ${activeIndex >=index && 'bg-blue-600'}`}>
                        {item.icon}
                    </div>
                    <h2 className='hidden text-white md:flex md:justify-center md:items-center md:block md:text-sm '>{item.name}</h2>
                </div>
                {index!=StepperOptions?.length-1 &&<div className={`h-1 w-[50px] md:w-[100px] rounded full lg:w-[170px] bg-black ${activeIndex-1>=index &&'bg-blue-600'}`}></div>}
                 </div>
                
             ))}   
            </div>
        </div>
        <div className='px-10 md:px-20 lg:px-44 mt-10'>
        {/* component */}

        {/* Next Previous Button */}
        <div className='flex justify-between mt-10'>
        <Button disabled={activeIndex==0}  onClick={()=>setActiveIndex(activeIndex-1)}>Previous</Button>
            <Button disabled={activeIndex==StepperOptions.length-1} onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>
            {activeIndex==StepperOptions.length-1 &&<Button>Generate Course layout</Button>}
        </div>
        </div>
    </div>
  )
}

export default CreateCourse