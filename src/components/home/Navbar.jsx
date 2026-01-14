import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6">
      <Link 
        to="/mission" 
        className=" font-[font2] px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform border-2 border-white text-[4.5vw]"
      >
Mission
      </Link>
      <Link 
        to="/agents" 
        className="font-[font2] px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform border-2 border-white text-[4.5vw]"
      >
Agents
      </Link>
    </div>
  )
}

export default Navbar