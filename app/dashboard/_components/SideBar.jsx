'use client';
import React, { useContext } from 'react'
import { TiHome } from "react-icons/ti";
import { RiSearchFill } from "react-icons/ri";
import { FaShieldHalved } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { Progress } from '/components/ui/progress.jsx';
import { UserCourseListContext } from '../../_context/UserCourseListContext';

function SideBar() {
    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext)
    const Menu=[
        {
            id:1,
            name:'Home',
            icon:<TiHome />,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Explore',
            icon:<RiSearchFill />,
            path:'/dashboard/explore'
        },
        {
            id:3,
            name:'Upgrade',
            icon:<FaShieldHalved />,
            path:'/dashboard/upgrade'
        },
        {
            id:4,
            name:'Logout',
            icon:<IoLogOutSharp />,
            path:'/dashboard/logout'
        }
    ]
    const path=usePathname();
  return (
    <div className='fixed bg-white md:w-64 h-full p-5 shadow-md'>
    <div className='flex'>
    <h1  className={`p-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-serif text-transparent sm:text-2.5xl `}> LearnLab.ai</h1>
    </div>
    <hr />
    <ul>
        {Menu.map((item,index)=>(
            <a key={index} href={item.path}>
            <div  className={`flex items-center gap-2 mb-4 text-gray-600 p-5 cursor-pointer hover:bg-gray-100 hover:text-black rounded ${item.path==path &&'bg-gray-100 text-black'}`}>
                <div className='text-xl'>
                    {item.icon}
                </div>

                <h2>{item.name}</h2>
            </div>
            </a>
        ))}
    </ul>
    <div className='absolute bottom-10 w-[80%]'>
        <Progress value={(userCourseList?.length/5)*100}/>
        <h2 className='text-sm my-2 text-black'>{userCourseList?.length} Out of 5 Courses Created</h2>
        <h2 className='text-xs text-gray-500'>Upgrade your plan to create more courses</h2>
    </div>
    </div>
  )
}

export default SideBar