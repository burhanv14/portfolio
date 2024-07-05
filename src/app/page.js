'use client'
import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import { useRouter } from "next/navigation"
import Spline from '@splinetool/react-spline/next';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Footer from './footer';


function Page() {
  const router = useRouter();
  return (
    <div>
      <div> 
      <video src={require('../../public/bg_vid.mp4')} autoPlay loop muted class="object-fill h-svh md:h-svh w-full absolute top-0 -z-10 bg-contain"/>
        <div class="pl-4 md:pl-16 flex flex-row">
          <div class="pt-44 md:pt-20">
            <h1 class="text-white text-4xl py-10  pr-0 md:text-6xl md:pt-56 flex flex-col" style={{fontFamily:'Permanent Marker'}}>
                <Typewriter
                words={['Burhanuddin Vora','Burhanuddin Vora']}
                loop={0}
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={18000}/>
                <span style={{fontFamily:'Ubuntu'}} class="text-base p-2 pb-0 md:text-lg md:p-4 md:pb-0">
                  <Typewriter
                  words={['Web-Developement','Machine Learning','Competitive Coding']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  cursorBlinking
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={2000}/>
                </span>
            </h1>
            <a href="#_" class="relative py-3 px-2 md:px-5 md:py-2 md:font-medium text-white group" onClick={()=>router.push("https://drive.google.com/file/d/1w7iWeK1hd89HV9zYjAV5-w5oAQsabfeo/view?usp=sharing")}>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                  <span class="relative">View Resume</span>
            </a>
         </div>
         {/*<div class="h-64 w-64 px-16 absolute top-96 md:absolute md:z-30 md:right-36 md:top-64">
         <Spline
        scene="https://prod.spline.design/QftcSoEbroF9lA7x/scene.splinecode" 
        width={1080}
        height={1080}/>
        </div>*/}
        </div>
      </div>
      <div>
        <p class="pt-96 md:pt-64 "></p>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}

export default Page


