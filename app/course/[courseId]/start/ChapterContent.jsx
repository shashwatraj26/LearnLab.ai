import React from 'react'
import Youtube from 'react-youtube'
import ReactMarkdown from 'react-markdown';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0, // Do not autoplay the video
    },
};

function ChapterContent({ chapter, content }) {
  return (
    <div className='p-10'>
      {/* Chapter Name */}
      {chapter?.name ? (
        <h2 className='text-blue-700 font-medium text-2xl'>{chapter?.name}</h2>
      ) : (
        <h2 className='text-gray-400 font-medium text-2xl'>No chapter selected</h2>
      )}

      {/* Chapter Description */}
      {chapter?.about ? (
        <p className='text-white'>{chapter?.about}</p>
      ) : (
        <p className='text-gray-400'>No description available for this chapter</p>
      )}

      {/* YouTube Video */}
      <div className='flex justify-center my-6'>
      {content?.videoId ? (
        <Youtube videoId={content.videoId} opts={opts} />
      ) : (
        <p className='text-gray-400'>No video available for this chapter</p>
      )}
      </div>
      <div className='p-4'>
  {content?.content?.map((item,index)=>(
    <div key={index} className='p-5 bg-sky-50 mb-3 rounded-lg'>
    <h2 className='font-medium text-lg text-purple-700 '>{item.title}</h2>
    <p className='font-serif text-black '>
    <ReactMarkdown>{item?.explanation}</ReactMarkdown></p>
    {item.CodeExample&&<div className='p-4 bg-black text-white rounded-md mt-3'>
      <pre>
        <code>{item?.CodeExample}</code>
      </pre>
    </div>}
    </div>
  ))}
</div>



      {/* Additional Content (if any) */}
      {/* Render additional content here if needed */}
    </div>
  )
}

export default ChapterContent;
