import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import SidebarRow from './SidebarRow'
import Image from 'next/image'
import logo from '/src/img/logo-icon.png'
import logoName from '/src/img/logo-name.png'
import { 
  BiHomeAlt,
 } from 'react-icons/bi';
 import { 
  TbPaw,
 } from 'react-icons/tb';
 import { 
  HiHome,
  HiOutlineUserGroup,
 } from 'react-icons/hi';
 import { 
  RiHandHeartLine,
 } from 'react-icons/ri';
import { 
  LogoutIcon,
  StarIcon, 
  CogIcon,
  AnnotationIcon,
 } from '@heroicons/react/outline'; 
 import {
  UserCircleIcon, 
  ChevronDownIcon,
 } from '@heroicons/react/solid';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSidebarRowClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className='hidden sm:flex lg:flex md:flex xl:flex xl:flex-col bg-[#FCFDFD] h-screen xl:w-[300px] sm:w-[90px] fixed border-r border-gray-300'>    
      <div className=''>

        {/* Logo */}
        <div className='flex justify-center items-center p-4 my-3'>
          <Image 
            className=''
            src={logo} 
            alt="Logo" 
            width={35} 
            height={35} 
            layout='fixed' 
          />
          <Image 
            className='ml-3 xl:flex hidden'
            src={logoName} 
            alt="Petournal" 
            width={100} 
            height={100} 
            layout='fixed' 
          />         
        </div>

        {/* Menubar */}
        <div className=' pt-2 px-4'>
          <Link href="/">
            <div>
              <SidebarRow Icon={HiHome} title="Trang chủ" active={activeIndex === 0} onClick={() => handleSidebarRowClick(0)} />
            </div>
          </Link>

          <Link href="/pets">
            <div>
              <SidebarRow Icon={TbPaw} title="Thú cưng" active={activeIndex === 1} onClick={() => handleSidebarRowClick(1)} />
            </div>
          </Link>

          <Link href="/follower">
            <div>
              <SidebarRow Icon={StarIcon} title="Đang theo dõi" active={activeIndex === 2} onClick={() => handleSidebarRowClick(2)}/>
            </div>
          </Link>

          <Link href="/group">
            <div>
              <SidebarRow Icon={HiOutlineUserGroup} title="Nhóm" active={activeIndex === 3} onClick={() => handleSidebarRowClick(3)} />
            </div>
          </Link> 
            
          <Link href="/chats">
            <div>
              <SidebarRow Icon={AnnotationIcon} title="Tin nhắn" active={activeIndex === 4} onClick={() => handleSidebarRowClick(4)}/>
            </div>
          </Link> 

          <Link href="/petcare">
            <div>
              <SidebarRow Icon={RiHandHeartLine} title="Pet Care" active={activeIndex === 5} onClick={() => handleSidebarRowClick(5)}/>
            </div>
          </Link> 

          <Link href="/profile">
            <div>
              <SidebarRow Icon={UserCircleIcon} title="Trang cá nhân" active={activeIndex === 6} onClick={() => handleSidebarRowClick(6)}/> 
            </div>
          </Link>
     
          <div class="mt-4 mx-4 border-b-2"></div>
          <div className='mt-4'>
            <Link href="/settings">
              <div>
                <SidebarRow Icon={CogIcon} title="Cài đặt" active={activeIndex === 7} onClick={() => handleSidebarRowClick(7)} />  
              </div>
            </Link>

            <Link href="/logout">
              <div>
                <SidebarRow Icon={LogoutIcon} title="Đăng xuất" /> 
              </div>
            </Link>
            
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Sidebar