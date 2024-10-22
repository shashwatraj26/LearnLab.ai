import React, { useContext } from 'react'
import Image from 'next/image'
import CategoryList from '../../_shared/categoryList'
import { UserInputContext } from '../../_context/UserInputContext'
function SelectCategory() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleCategoryChange=(category)=>{
    setUserCourseInput(prev=>({
      ...prev,
      category:category
    }))
  }
  return (
    <div className='px-10 md:px-20'>
        <h2 className='text-white md:mx-20 mx-10 my-5'>Select the Course Category</h2>
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        {CategoryList.map((item,index)=>(
            <div key={index} className={`flex flex-col p-5 border items-center rounded-xl hover:border-purple-600 hover:bg-blue-400 cursor-pointer ${userCourseInput?.category==item.name && 'border-purple-600 bg-blue-600'}`}
            onClick={()=>handleCategoryChange(item.name)}>
                <Image src={item.icon} width={50} height={50}/>
                <h2 className='text-white'>{item.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SelectCategory