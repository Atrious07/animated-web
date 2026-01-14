import React from 'react'

const Agentcard = (props) => {
    return (
<>
            {/* Left side - Image */}
            <div className="lg:w-1/2 relative flex-1 group overflow-hidden">
                <img
                    src={props.agents[0].image}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 object-top"
                />
                {/* Transparent overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500 flex items-center justify-center">
                    <h1 className="text-white text-5xl rounded-full border-4 border-white font-[font1] 
                         px-6 py-3 text-center">
                        {props.agents[0].name}
                    </h1>
                </div>
            </div>

            {/* Right side - Text box */}
            <div className="lg:w-1/2 flex items-center justify-center bg-black p-6">
                <p className="text-white text-2xl font-[font2] text-center">
                    {props.agents[0].description}
                </p>
            </div>
</>
    )
}

export default Agentcard