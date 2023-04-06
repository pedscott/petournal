import React from 'react'
import Image from 'next/image'
import bgImage from '/src/img/bg-image.png'
import logoImage from '/src/img/logo-name.svg'

function LoginForm() {
  return (
    <div className='flex w-full h-screen'>
      
      {/* Background */}
      <div className='hidden lg:flex h-full w-1/2 bg-violet-300 justify-center items-center'>
        {/* <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-violet-800 rounded-full'> */}
          <Image 
            src={bgImage} 
            alt="background-image" 
            layout='fixed' 
          />
        {/* </div> */}
      </div>

      {/* Form */}
      <div className='flex items-center justify-center w-full lg:w-1/2 px-10 '>
        <div className='bg-white'>
          <Image
            className='w-48' 
            src={logoImage} 
            alt="background-image"
            layout='fixed' 
          />
          <p className='text-lg mt-3.5'>Kết nối với cộng đồng những người yêu thú cưng.</p>

          {/* Input Field */}
          <div className='mt-8'>
            <div>

              <input
                className='w-full border-2 outline-none border-gray-100 rounded-md p-2.5'
                placeholder='Email'
              />
            </div>

            <div className='mt-4'>
              <input
                className='w-full border-2 outline-none border-gray-100 rounded-md p-2.5'
                placeholder='Mật khẩu'
                type='password'
              />
            </div>
            <button className='font-medium text-base text-violet-500 mt-3'>Quên mật khẩu?</button>
            
            {/* Buttons */}
            <div className='mt-6 flex flex-col gap-y-4'>
              <button className='active:scale-[.98] active:duration-75 transition-all py-2.5 rounded-xl text-white bg-violet-500 text-lg font-bold'>Đăng nhập</button>
              
              <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all py-2.5 rounded-xl text-white bg-blue-600 text-lg font-bold'>
                <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="white"></path></svg>
                Đăng nhập với Facebook
              </button>
            </div>

            <div className='mt-8 flex justify-center items-center'>
              <p>Bạn chưa có tài khoản?</p>
              <button className='text-violet-500 textbase font-medium ml-2'>Đăng ký tại đây.</button>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginForm