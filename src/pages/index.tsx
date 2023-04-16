import React from 'react'
import Head from 'next/head'
import { getProviders, getSession, useSession } from "next-auth/react"
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/Feed'
import Widgets from '../../components/Widgets'

export default function Home() {
  // const { data: session } = useSession;

  // if(!session) return <LoginForm />;

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

          {/* Feed */}
          <Feed />

          {/* Widgets */}
          <Widgets />
        </div>       
      </main>
    </>
  )
}

// export async function getServerSideProps(context) {
//   // const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
//   //   (res) => res.json()
//   // );
//   // const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
//   //   (res) => res.json()
//   // );
//   const providers = await getProviders();
//   const session = await getSession(context);

//   return {
//     props: {
//       // trendingResults,
//       // followResults,
//       providers,
//       session,
//     },
// //   };
// }