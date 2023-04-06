import React from 'react'
import Image from 'next/image'
import logo from '/src/img/logo-icon.png'
import logoName from '/src/img/logo-name.png'
import { 
  SearchIcon, 
 } from '@heroicons/react/outline';
 
 import { 
  AnnotationIcon,
  BellIcon,
  ChevronDownIcon,
 } from '@heroicons/react/solid';
 

function Header() {
  return (
    <div className='flex sticky top-0 z-50 justify-between items-center p-2 lg:px-5 bg-white shadow-md'>
      
      {/* Left */}
      <div className='flex items-center'>
        <Image 
          className='ml-6'
          src={logo} 
          alt="Logo" 
          width={35} 
          height={35} 
          layout='fixed' 
        />
        <Image 
          className='ml-2.5'
          src={logoName} 
          alt="Petournal" 
          width={100} 
          height={100} 
          layout='fixed' 
        />
        
      </div>
      
      {/* Center */}
      <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
        <SearchIcon className='h-6 text-gray-500'/>
        <input className='flex ml-2 bg-transparent outline-none  text-gray-500 flex-shrink'
        type="text" placeholder="Tìm kiếm trên Petournal"></input>
      </div>

      {/* Right */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        
        {/* Profile Picture */}  
        <p className='whitespace-nowrap font-semibold pr-3 pl-3'>Pedro Scott</p>    
        <AnnotationIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
      </div>
    </div>
  )
}

export default Header