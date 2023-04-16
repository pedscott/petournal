import React from 'react'
import defaultAvatar from '/src/img/default-avatar.png';
import testAvatar from '/src/img/test-avatar.jpg';
import testAvatar2 from '/src/img/test-avatar2.jpg';
import Image from 'next/image';
import { 
  BellIcon,
  SearchIcon, 
 } from '@heroicons/react/outline'; 

function Widgets() {
  return (
    <div className='hidden lg:inline mx-2 xl:w-[450px] space-y-5' >    
      <div className='flex pt-1.5 space-x-4 sticky top-0 z-50 bg-white'>
        <BellIcon className='icon ml-8'/>
        <div className='hidden md:flex ml-6 items-center rounded-full bg-gray-100 py-1.5'>
          <SearchIcon className='h-4 pl-4 text-gray-500'/>
          <input className=' flex ml-4 bg-transparent outline-none text-gray-500 flex-shrink pr-8'
          type="text"  placeholder="Tìm kiếm"></input>
        </div>    
      </div>

      <div className=" pt-2 rounded-xl ">
        <h4 className="font-bold text-xl px-4 py-2">Có thể bạn biết</h4>
       
          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
          >
            <Image
              src={defaultAvatar}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Phuoc Nguyen
              </h4>
              <h5 className="text-gray-500 text-[15px]">47 người theo dõi</h5>
            </div>
            <button className="ml-auto text-violet-500 rounded-full font-bold text-sm py-1.5 px-3.5">
              Theo dõi
            </button>
          </div>
          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
          >
            <Image
              src={testAvatar}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Son Nguyen
              </h4>
              <h5 className="text-gray-500 text-[15px]">89 người theo dõi</h5>
            </div>
            <button className="ml-auto text-violet-500 rounded-full font-bold text-sm py-1.5 px-3.5">
              Theo dõi
            </button>
          </div>
          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
          >
            <Image
              src={testAvatar2}
              width={50}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">
                Huong Lua Nguyen
              </h4>
              <h5 className="text-gray-500 text-[15px]">123 người theo dõi</h5>
            </div>
            <button className="ml-auto text-violet-500 rounded-full font-bold text-sm py-1.5 px-3.5">
              Theo dõi
            </button>
          </div>
        <button className=" px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-violet-500 font-base">
          Xem thêm
        </button>
      </div>  
    </div>
  )
}

export default Widgets