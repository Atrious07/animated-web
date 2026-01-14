import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
const Stairanimation = ({children}) => {
    const currPath=useLocation().pathname
    const parentRef=useRef(null)
    const straiParentRef=useRef(null)
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(straiParentRef.current,{
            display:'block',
            delay:-0.2
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(straiParentRef.current,{
            display:'none'
        })
        tl.to('.stair',{
            y:'0%'
        })
        gsap.from(parentRef.current,{
            opacity:0,
            delay:1.2
        })
    },[currPath])
    return (
        <div>
        <div ref={straiParentRef} className='h-screen w-full  fixed z-10 top-0'>
            <div className='h-full w-full flex '>
                <div className='h-full w-1/5 bg-black stair'></div>
                <div className='h-full w-1/5 bg-black stair'></div>
                <div className='h-full w-1/5 bg-black stair'></div>
                <div className='h-full w-1/5 bg-black stair'></div>
                <div className='h-full w-1/5 bg-black stair'></div>
            </div>
        </div>
        <div ref={parentRef}>
        {children}
        </div>

        </div>
    )
}

export default Stairanimation