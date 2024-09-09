import React, { useContext } from 'react'
import  {Input}  from "/components/ui/input"
import {Textarea} from "/components/ui/textarea"
import { UserInputContext } from '../../_context/UserInputContext';
function TopicDescription() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
const handleInputChange=(fieldName,value)=>{
  setUserCourseInput(prev=>({
    ...prev,
    [fieldName]:value
  }))
}
  return (
    <div>
       {/* InputTopic */}
       <div className='mt-5'> 
        <label className='text-white'>Write a Topic for which you want to generate a course(e.g., Python Course, Yoga, etc.):</label>
        <Input placeholder={'Topic'} className='h-14 text-xl' 
        onChange={(e)=>handleInputChange('topic',e.target.value)}/>
       </div>
       <div className='mt-5'>
        <label className='text-white'>Tell us more about your course, what you want to include</label>
        <Textarea placeholder="About your Course" className='h-14 text-xl text-white' 
        onChange={(e)=>handleInputChange('description',e.target.value)}/>
       </div>
       {/* Text Area Desc*/} 
    </div>
  )
}

export default TopicDescription