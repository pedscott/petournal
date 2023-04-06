import Head from 'next/head'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'

export default function Home(session:any) {
  if(!session) return <LoginForm />;
  return (
    <>
      <Head>
        <title>Petournal</title>
        
      </Head>
      
      <Header />
      <LoginForm />
      {/* <SignupForm /> */}
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </>
  )
}
