import React from 'react'
import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import LoginForm from '../../components/LoginForm'

function logout() {
  return (
    <>      
       <Head>
        <title>Petournal</title>       
      </Head>
      
      <main> 
        <LoginForm />
    
      </main>
    </>
  )
}

export default logout