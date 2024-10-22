"use client"
import React, { useEffect, useState } from 'react'
import { db } from '../../../configs/db'
import { CourseList } from '../../../configs/schema'
import { eq } from 'drizzle-orm'
import CourseBasicInfo from '../../create-course/[courseId]/_components/CourseBasicInfo'
import Header from '../../_components/Header'
import CourseDetail from '../../create-course/[courseId]/_components/CourseDetail'
import ChapterList from '../../create-course/[courseId]/_components/ChapterList'

function Course({ params }) {
    const [course, setCourse] = useState();

    useEffect(() => {
        if (params) {
            GetCourse();  // Ensure this is called
        }
    }, [params]);

    const GetCourse = async () => {
        try {
            const result = await db.select().from(CourseList).where(eq(CourseList?.courseId, params?.courseId));
            setCourse(result[0]);
        } catch (error) {
            console.error('Error fetching course:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className='px-10 p-10 md:px-20 lg:px-44'>
                <CourseBasicInfo course={course} edit={false} />
                <CourseDetail course={course}/>
                <ChapterList course={course} edit={false}/>
            </div>
        </div>
    );
}

export default Course;
