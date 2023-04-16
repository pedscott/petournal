import React from 'react'
import Image from 'next/image'

function SidebarRow({Icon, title, active }) {
  return (
    <div 
      className={`flex hover:scale-[1.02] hover:duration-75 transition-all items-center justify-center xl:justify-start  py-3 px-4 hover:bg-gray-100 text-gray-700 rounded-xl cursor-pointer ${active && "font-bold text-violet-500" }`}
      style={active ? { opacity: 1 } : { opacity: 0.8 }}
    >   
      {Icon && <Icon className=" h-7 w-8"/>}
      <p className='hidden xl:inline-flex px-6 text-lg'>{title}</p>   
    </div>
  )
}


export default SidebarRow; 