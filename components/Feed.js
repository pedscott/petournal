import React from 'react'
import InputBox from './InputBox'
import PostCard from './PostCard'
import { 
  AnnotationIcon,
  SearchIcon,
  BellIcon, 
 } from '@heroicons/react/outline'; 

function Feed() {
  return (
    <div className='flex-grow justify-center min-h-screen border-r border-gray-300 md:w-xl max-w-3xl sm:ml-[90px] xl:ml-[300px]'>
      <div className='items-center sm:justify-between bg-white py-3 px-6 sticky top-0 z-50 border-b border-gray-300'>
        <h2 className='text-lg font-bold sm:text-xl'>Dòng thời gian</h2>
      </div>
        {/* InputBox */}
        <InputBox />

        {/* Posts */}
        <PostCard />
    </div>
  )
}

export default Feed