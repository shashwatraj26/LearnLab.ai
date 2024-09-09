import React, { useContext } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "/components/ui/select";
 import {Input} from '/components/ui/input' 
import { UserInputContext } from '../../_context/UserInputContext';
function SelectOption() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
const handleInputChange=(fieldName,value)=>{
  setUserCourseInput(prev=>({
    ...prev,
    [fieldName]:value
  }))
}
  return (
    <div className='px-10 md:px-20 lg:px-40'>
        <div className='grid grid-cols-2 gap-10'>
            <div>
            <label className='text-sm text-white'>Difficulty Level</label>
        <Select onValueChange={(value)=>handleInputChange('level',value)}>
  <SelectTrigger className="">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Beginner">Beginner</SelectItem>
    <SelectItem value="Intermediate">Intermediate</SelectItem>
    <SelectItem value="Advance">Advance</SelectItem>
  </SelectContent>
</Select >
</div> 
<div>
            <label className='text-sm text-white'>Course Duration</label>
        <Select onValueChange={(value)=>handleInputChange('duration',value)}>
  <SelectTrigger className="">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1 hour">1 hour</SelectItem>
    <SelectItem value="2 hours">2 hours</SelectItem>
    <SelectItem value="More than 2 hours">More than 2 hours</SelectItem>
  </SelectContent>
</Select >
</div> 
<div>
            <label className='text-sm text-white'>Add Videos</label>
        <Select onValueChange={(value)=>handleInputChange('displayVideo',value)}>
  <SelectTrigger className="">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Yes">Yes</SelectItem>
    <SelectItem value="No">No</SelectItem>
  </SelectContent>
</Select>
</div>
<div>
    <label className='text-sm text-white'>No Of Chapters</label>
    <Input type="number" className="text-foreground"
    onChange={(e)=>handleInputChange('noOfChapter',e.target.value)}/>
</div>

        </div>
    </div>
  )
}

export default SelectOption