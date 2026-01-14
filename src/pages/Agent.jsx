import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import image1 from '../assets/image.png'
import image2 from '../assets/agent2.jpg'
import image3 from '../assets/agent3.jpg'
import image4 from '../assets/agent4.jpg'
import image5 from '../assets/agent5.jpg'
import image6 from '../assets/img6.jpg'
import image7 from '../assets/agent6.jpg'
import Agentcard from '../components/about/Agentcard'


const Agent = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imagedivRef = useRef(null)
  const imageRef = useRef(null)

  const imgArray = [image1, image2, image3, image4, image5, image6, image7]

  useGSAP(() => {
    gsap.to(imagedivRef.current, {
      scrollTrigger: {
        trigger: imagedivRef.current,
        start: 'top 20%',
        end: 'top -50%',
        pin: true,
        onUpdate: (e) => {
          let imgIndex
          if (e.progress < 1) {
            console.log(e.progress)
            imgIndex = Math.floor(e.progress * imgArray.length - 1)
            console.log(imgIndex)
          } else {
            imgIndex = imgArray.length - 1
          }
          imageRef.current.src = imgArray[imgIndex]
        },
      },
    })
  })
  const agents = [{
    id: 1,
    name: "Jason Duval",
    image: image1,
    description: "Ex-army soldier jiska past drug world se juda hai; wo ek nayi, behtar zindagi ki talaash me ha."
  },
  {
    id: 2,
    name: "Lucia Caminos",
    image: image2,
    description: "Ek ex-convict jo intelligent, strategic aur determined hai; wo apni freedom aur control ke liye lad rahi hai."
  },
  {
    id: 3,
    name: "Cal Hampton",
    image: image3,
    description: "Ek conspiracy-focused loner jo hamesha sarkar aur underworld ke secrets expose karne me laga rehta hai"
  },
  {
    id: 4,
    name: "Boobie eIk",
    image: image4,
    description: "Music aur entertainment industry ka bada mogul, jo apna influence aur power criminal underworld tak extend karta hai."
  },
  {
    id: 5,
    name: "Raul Bautista",
    image: image5,
    description: "Ek bold aur fearless bank robber, jo risky heists ko successfully pull off karne ke liye jaana jata hai."
  },
  {
    id: 6,
    name: "Lester Crest",
    image: image6,
    description: "Lester Crest is a key supporting character in Grand Theft Auto V."
  },
  {
    id: 7,
    name: "Brian Heder",
    image: image7,
    description: "Ek eccentric aur shady figure, jiska role criminal operations me unique twist lata hai (more details abhi officially limited hain)."
  }
  ]
  useGSAP(function () {
    gsap.utils.toArray(".hero").forEach((el) => {
      gsap.from(el, {
        height: "200px",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top -150%",
          scrub: true,
        },
      });
    });
  });
  return (
    <div className="bg-zinc-900">
      {/* Section 1 */}
      <div className="relative py-10">
        {/* Image container */}
        <div
          ref={imagedivRef}
          className="absolute 
                     left-1/2 -translate-x-1/2 
                     w-[70vw] h-[40vh] sm:w-[50vw] sm:h-[50vh] lg:w-[17vw] lg:h-[50vh] 
                     bg-red-400 rounded-2xl overflow-hidden"
        >
          <img
            ref={imageRef}
            src={image1}
            alt="scroll-change"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Title */}
        <div className="mt-[55vh] relative">
          <h1 className="text-center text-white 
                         text-5xl sm:text-7xl lg:text-9xl 
                         font-[font1] font-bold uppercase 
                         leading-[15vw] sm:leading-[12vw] lg:leading-[10vw]">
            GTA Character's
          </h1>
        </div>

        {/* Paragraph */}
        <div className="mt-8 px-5 sm:px-16 lg:pl-[50%]">
          <p className="text-white font-[font2] 
                        text-lg sm:text-2xl lg:text-3xl 
                        leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur voluptatum aliquam excepturi fugiat quasi minus
            beatae totam dolore aut consequuntur corrupti, velit id hic
            possimus nisi perspiciatis, in placeat. Accusantium
            necessitatibus sequi non atque magni. Necessitatibus saepe
            fugiat voluptatem assumenda omnis voluptatibus dolore sunt ea!
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section2 ">
        <div className='mt-10 lol'>
          {agents.map((agent) => (
            <div className=" hero flex gap-2 p-2 w-full lg:h-[450px] lg:gap-4 lg:flex-row flex-col">
              <Agentcard key={agent.id} agents={[agent]} />
            </div>
          ))}
        </div>
      </div >
    </div >
  )
}

export default Agent
