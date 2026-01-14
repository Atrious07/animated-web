import React from 'react'

const Cards = (props) => {
  return (
    <>
      {/* First image */}
      <div className="lg:w-1/2 relative flex-1 group overflow-hidden">
        <img
          src={props.projects[0].image1}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <h1 className='text-white text-5xl rounded-full border-4 border-white font-[font2] w-65 h-19 px-5 py-2 text-center'>{props.projects[0].title1}</h1>
        </div>
      </div>

      {/* Second image */}
      <div className="lg:w-1/2 relative flex-1 group overflow-hidden">
        <img
          src={props.projects[0].image2}
          alt=""
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <h1 className='text-white text-5xl rounded-full border-4 border-white font-[font2] w-65 h-19 px-5 py-2 text-center'>{props.projects[0].title2}</h1>
        </div>
      </div>
    </>
  )
}

export default Cards
