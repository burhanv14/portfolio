'use client'
import Image from "next/image"
import sign from "../components/signbur.jpg"
import headbackg from "../components/headbackg.jpg"
import { useRouter } from "next/navigation"

export default function Header(){
    const router=useRouter();
  const goToAbout = ()=>{
    window.scrollTo({top:650,left:0,behavior:"smooth"});
  }
  const goToHome = ()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  }
  const goToSkills = ()=>{
    window.scrollTo({top:1590,left:0,behavior:"smooth"});
  }
  
  const goToProjects = ()=>{
    window.scrollTo({top:2062,left:0,behavior:"smooth"});
  }
  
  const goToContact = ()=>{
    window.scrollTo({top:2500,left:0,behavior:"smooth"});
  }
    return (
      <nav class="top-0 w-full z-50 fixed">
        <div class="relative">
            <Image
            src={headbackg}
            width={10000}
            alt="Header background"
            class="absolute h-20 opacity-50"/>  
            <Image
            src={sign}
            width={135}
            height={135}
            alt="Signature photo relative"
            class="absolute pt-2 hover:cursor-pointer" onClick={()=>router.push('./')}/>
            <div class="absolute space-x-20 right-0 inset-y-6 pr-8" style={{fontFamily:'Kalnia'}}>
            <button  class="text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca]" onClick={goToHome}>Home</button>
            <button  class="text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca]" onClick={goToAbout}>About</button>
            <button  class="text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca]" onClick={goToSkills}>Skills</button>
            <button  class="text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca]" onClick={goToProjects}>Projects</button>
            <button  class="text-white text-xl hover:underline underline-offset-8 hover:text-[#fecaca]" onClick={goToContact}>Contact</button>
            </div>
        </div>
      </nav>
    )
}