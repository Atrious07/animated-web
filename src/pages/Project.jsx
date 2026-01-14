
import React from 'react'
import Cards from '../components/project/Cards'
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'
import proj4 from '../assets/proj4.jpg'
import proj5 from '../assets/proj5.jpg'
import proj6 from '../assets/proj6.jpg'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
const Project = () => {
  const projects = [
    {
      id: 1,
      image1: proj1,
      image2: proj2,
      title1: 'YSOHNUL',
      title2: 'FLOATER'
    },
    {
      id: 2,
      image1: proj3,
      image2: proj4,
      title1: 'HOPTOIT',
      title2: 'CATCHME'
    },
    {
      id: 3,
      image1: proj5,
      image2: proj6,
      title1: 'LIQUOR',
      title2: 'LXGIWYL'
    }

  ]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from('.hero', {
      height: '200px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger:{
      marker:true,
      trigger: '.lol',
      start: 'top 100%',
      end: 'top -150%',
      scrub: true
    }
  })
    })
return (
  <div className='bg-zinc-900 w-full min-h-screen p-2'>
    <div className='pt-45'>
      <h1 className='text-white text-6xl font-[font2] font-medium uppercase pl-9'>Mission</h1>
    </div>
    <div className='lol mt-20'>
      {projects.map((project) => (
        <div className=" hero flex gap-2 p-2 w-full lg:h-[450px] lg:gap-4 lg:flex-row flex-col">
          <Cards key={project.id} projects={[project]} />
        </div>
      ))}
    </div>
  </div>
)
}

export default Project