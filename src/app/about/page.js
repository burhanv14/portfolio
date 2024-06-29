'use client'
import Image from "next/image"
import pfp from '../../../public/Burhan Vora.jpg'
import schoolpic from '../../../public/school.jpg'
import collegepic from '../../../public/college.jpg'

export default function About(){
    return(
    <div class="bg-gray-950 h-auto w-full flex flex-col">
        <div class="px-1 pb-8 md:pl-10 md:pb-6 flex-col">
            <div class="bg-stone-900 h-56 w-full md:w-96 rounded-3xl rounded-t-none text-center">
                <h1 class=" text-3xl text-amber-50 pt-24 hover:cursor-vertical-text"  style={{fontFamily:'Kalnia'}}>ABOUT</h1>
            </div>
        </div>
        <div class="flex flex-col md:flex md:flex-row transition"> 
            <div class="flex-col md:flex-row pl-16 md:pl-24 md:pr-16 pb-8 md:pb-0">
               <Image
                src={pfp}
                alt="Profile Picture"
                height={240}
                width={250}
                quality={100}
                class="rounded-3xl border-2 border-white border-opacity-90 hover:animate-pulse duration-500 hover:scale-110"/>
            </div>
            <div class="bg-zinc-900 object-fill rounded-3xl h-auto md:h-80 w-full md:w-auto py-4 md:py-5 md:px-5 flex flex-col md:flex md:flex-row text-center duration-500 hover:scale-y-105">
              <h1 class="text-amber-50 text-3xl md:pt-44 pb-8 md:pb-0 md:rotate-90 flex-col md:flex-row" style={{fontFamily:'Kalnia'}}>EDUCATION</h1>
              <div class="relative group">
              <Image
                src={schoolpic}
                 alt="School"
                  quality={100}
                  class="rounded-3xl border-2 border-white border-opacity-10 h-72 w-full hover:opacity-30 p-8 md:p-2 bg-cover"/>
                  <h1 class="opacity-0 group-hover:opacity-100 duration-300 bg-black text-white text-base font-serif">Queen of Angels Convent Higher Secondary School</h1>
                  </div>
                 <p class="md:px-4 py-3 md:py-0"></p>
                  <div class="group relative">
                  <Image 
                  src={collegepic}
                  alt="College"
                  quality={100}
                  class="rounded-3xl border-2 border-white border-opacity-10 h-72 w-full hover:opacity-30 p-8 md:p-2"/>
                  <h1 class="opacity-0 group-hover:opacity-100 duration-300 bg-black text-white text-base font-serif">The LNM Institute of Information Technology (CGPA:8.34)</h1>
                  </div>
            </div>
          </div>
          <div class="flex flex-col md:flex md:flex-row pt-8 md:pt-14 md:w-1/2 md:gap-x-40 gap-y-10 md:gap-y-0">
              <div class="md:pl-24 md:pt-10">
                    <p class="bg-zinc-900 h-72 w-96 rounded-3xl text-left transition duration-500 hover:scale-105 p-9 text-white" style={{fontFamily:'Ubuntu'}}>Pre-Final year student at The LNM Institute of Information Technology , Jaipur.
                    <br/>I am an active coding enthusiast , with passion in new emerging fields of technology and competitive coding as well.<br/>I am a machine learning enthusiast along with knowledge in the field of web development.</p>
              </div>
              <div class="pl-12 md:pl-0">
                   <div class="bg-stone-900 h-96 w-72 rounded-3xl transition duration-500 hover:scale-105 flex-row">
                            <h1 class="text-amber-50 text-center text-lg pt-8 " style={{fontFamily:'Ubuntu'}}>Interests & Hobbies</h1>
                            <ul class="list-disc text-amber-50 list-inside pl-8 pt-4 leading-10 text-base">
                                <li>Sports</li>
                                <li>Movies & Anime</li>
                                <li>Gymnasium</li>
                                <li>Finance</li>
                                <li>Fashion & Clothes</li>
                                <li>Mountaineering</li>
                                <li>Coding ;)</li>
                            </ul>
                      </div>
              </div>
              <div class="pl-12 md:pl-0">
                   <div class="bg-stone-900 h-96 w-72 rounded-3xl transition duration-500 hover:scale-105 flex-row">
                   <h1 class="text-amber-50 text-center text-lg pt-8 " style={{fontFamily:'Ubuntu'}}>Clubs & Societies</h1>
                            <ul class="list-disc text-amber-50 list-inside pl-8 pt-4 leading-10 text-base">
                                <li>GDSC(Dev domain)</li>
                                <li>MediaCell</li>
                                <li>General Body Member(Sports)</li>
                                <li>Desportivos O.C.(Sponsorship)</li>
                                <li>Alumini-Association, LNMIIT</li>
                                <li>TedXLNMIIT O.C.</li>
                            </ul>
                      </div>
              </div>
          </div>
      </div>  
    )
}






