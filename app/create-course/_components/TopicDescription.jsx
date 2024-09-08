import React from 'react'
import  {Input}  from "/components/ui/input"
import {Textarea} from "/components/ui/textarea"
function TopicDescription() {
  return (
    <div>
       {/* InputTopic */}
       <div className='mt-5'> 
        <label className='text-white'>Write a Topic for which you want to generate a course(e.g., Python Course, Yoga, etc.):</label>
        <Input placeholder={'Topic'}/>
       </div>
       <div className='mt-5'>
        <label className='text-white'>Tell us more about your course, what you want to include</label>
        <Textarea placeholder="About your Course"/>
       </div>
       {/* Text Area Desc*/} 
    </div>
  )
}

export default TopicDescription