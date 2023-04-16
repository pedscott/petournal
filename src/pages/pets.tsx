import React from 'react'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import SidebarRow from '../../components/SidebarRow'

function pets() {
  return (
    <>      
       <Head>
        <title>Petournal</title>       
      </Head>
      
      <main> 
        {/* <LoginForm /> */}
        {/* <SignupForm /> */}
        <div className="flex min-h-screen max-w-[1500px] mx-auto">
          {/* Sidebar */}
          <Sidebar /> 

          <div>pets</div>

          {/* Widgets */}
        </div>       
      </main>
    </>
  )
}

export default pets