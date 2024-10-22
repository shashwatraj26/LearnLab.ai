"use client"
import React, { useEffect, useState } from 'react'
import { db } from '../../../../configs/db'
import { Chapters, CourseList } from '../../../../configs/schema'
import { and, eq } from 'drizzle-orm'
import ChapterListCard from "./ChapterListCard"
import ChapterContent from "./ChapterContent";

function CourseStart({ params }) {
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();
    const [course, setCourse] = useState();

    useEffect(() => {
        
            GetCourse();
    }, []);

    const GetCourse = async () => {
        try {
            const result = await db.select().from(CourseList).where(eq(CourseList?.courseId, params?.courseId));
            setCourse(result[0]);
            // Fetch content for the first chapter (assuming index 0 corresponds to the first chapter)
            GetSelectedChapterContent(0);
            setSelectedChapter(result[0]?.courseOutput?.course?.chapters[0]);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    const GetSelectedChapterContent = async (chapterId) => {
        try {
            const result = await db.select().from(Chapters).where(and(eq(Chapters?.chapterId, chapterId), eq(Chapters?.courseId, course?.courseId)));
            
            setChapterContent(result[0]);
            console.log(result[0]);

        } catch (error) {
            console.error("Error fetching chapter content:", error);
        }
    };

    const handleChapterClick = (chapter,index) => {
        setSelectedChapter(chapter);
        GetSelectedChapterContent(index);
    };

    return (
        <div>
            {/* Chapter List*/}
            <div className='fixed md:w-80 hidden md:block h-full bg-white p-4'>
                <h2 className='font-medium text-lg bg-purple-700 p-3 text-white'>
                    {course?.courseOutput?.course?.name}
                </h2>
                <div>
                    {course?.courseOutput?.course?.chapters?.map((chapter, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer hover:bg-purple-100 ${
                                selectedChapter?.name === chapter?.name && 'bg-purple-200'
                            }`}
                            onClick={() => handleChapterClick(chapter,index)}
                        >
                            <ChapterListCard chapter={chapter} index={index} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Content Div */}
            <div className='md:ml-80'>
                <ChapterContent chapter={selectedChapter} content={chapterContent} />
            </div>
        </div>
    );
}

export default CourseStart;
