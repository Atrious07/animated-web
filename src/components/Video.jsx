
import React from 'react'
import gta6 from '../assets/GTA6.mp4'
const Video = () => {
  return (
    <div className='h-full w-full'>
        <video src={gta6} autoPlay loop muted  className=' w-full h-full object-cover'></video>
    </div>
  )
}

export default Video