import React from 'react'
import Video from '../components/Video'
import Text from '../components/home/Text'
import Navbar from '../components/home/Navbar'


const Home = () => {
  return (
    <>

      <div className='h-screen w-screen relative'>
      <Video/>
      </div>
      <div className="absolute inset-0 text-white z-10 text-4xl flex-col p-4"> 
      <Text/>
      <Navbar/>
      </div>
    </>
  )
}

export default Home