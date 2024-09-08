import React from 'react'
import Image from 'next/image'
import CategoryList from '/app/_shared/CategoryList'
function SelectCategory() {
  return (
    <div className='px-10 md:px-20'>
        <h2 className='text-white md:mx-20 mx-10 my-5'>Select the Course Category</h2>
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        {CategoryList.map((item,index)=>(
            <div key={item} className='flex flex-col p-5 border items-center rounded-xl hover:border-purple-600 hover:bg-blue-400 cursor-pointer'>
                <Image src={item.icon} width={50} height={50}/>
                <h2 className='text-white'>{item.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SelectCategory