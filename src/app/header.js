'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import Image from 'next/image'
import headImg from '../../public/headbackg.jpg'
import sign from '../../public/signbur.jpg'
import { useState } from 'react'

function Header() {
  const router = useRouter();
  
  const [menu,setMenu] = useState(0);
  
  const goToAbout = () => {
    window.scrollTo({ top: 650, left: 0, behavior: "smooth" });
}
  const goToHome = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  const goToSkills = () => {
      window.scrollTo({ top: 1710, left: 0, behavior: "smooth" });
  }
  const goToProjects = () => {
      window.scrollTo({ top: 2200, left: 0, behavior: "smooth" });
  }
  const goToContact = () => {
      window.scrollTo({ top: 2900, left: 0, behavior: "smooth" });
  }

  const mobgoToAbout = () => {
    window.scrollTo({ top: 850, left: 0, behavior: "smooth" });
    setMenu(0)
}
  const mobgoToHome = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setMenu(0)
  }
  const mobgoToSkills = () => {
      window.scrollTo({ top: 3500, left: 0, behavior: "smooth" });
      setMenu(0)
  }
  const mobgoToProjects = () => {
      window.scrollTo({ top: 4000, left: 0, behavior: "smooth" });
      setMenu(0)
  }
  const mobgoToContact = () => {
      window.scrollTo({ top: 5500, left: 0, behavior: "smooth" });
      setMenu(0)
  }
  
  return (
    <nav class="sticky md:fixed top-0 z-30 w-full">
        <Image alt="Header background" src={headImg} class="h-24 w-full md:h-20 md:w-full object-fill opacity-50 bg-cover absolute z-10"/>
        <div class="flex flex-row justify-between">
            <div class="p-4 md:p-2 flex-row">
              <Image alt="Burhan Sign" src={sign} class="hover:cursor-pointer h-16 w-auto md:h-16 md:w-auto object-fill absolute z-20 " onClick={() => router.push('./')} />
            </div>
            <div style={{ fontFamily: 'Kalnia' }} class="hidden relative z-20 md:flex md:items-center md:gap-16 md:p-6 ">
                    <button className=" text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-500" onClick={goToHome}>Home</button>
                    <button className=" text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-500" onClick={goToAbout}>About</button>
                    <button className=" text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-500" onClick={goToSkills}>Skills</button>
                    <button className=" text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-500" onClick={goToProjects}>Projects</button>
                    <button className=" text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-500" onClick={goToContact}>Contact</button>
            </div>
            <div style={{ fontFamily: 'Kalnia' }} class="relative z-20 md:hidden p-10 pt-9 flex flex-col">
                {menu === 0 &&
                  <svg class="h-8 w-8 text-white hover:cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={() => {setMenu(1)}}>  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="4" y1="18" x2="20" y2="18" /></svg>
                }
                {menu === 1 &&
                      <svg class="h-8 w-8 text-white hover:cursor-pointer flex-col absolute left-56"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" onClick={() => {setMenu(0)}}>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg> 
                }
                {menu === 1 &&
                      <div class="flex flex-col gap-4 pt-20 text-center pr-28" style={{ fontFamily: 'Kalnia' }} >
                      <button className=" bg-black text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-100" onClick={mobgoToHome}>Home</button>
                      <button className=" bg-black text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-100" onClick={mobgoToAbout}>About</button>
                      <button className=" bg-black text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-100" onClick={mobgoToSkills}>Skills</button>
                      <button className=" bg-black text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-100" onClick={mobgoToProjects}>Projects</button>
                      <button className=" bg-black text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca] transition-all duration-100" onClick={mobgoToContact}>Contact</button>
                      </div>
                }
            </div>
        </div>
    </nav>
  )
}

export default Header