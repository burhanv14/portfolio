'use client'
import Image from "next/image"
import pfp from '../about/Burhan Vora.jpg'
import schoolpic from '../about/school.jpg'
import collegepic from '../about/college.jpg'

export default function About(){
    return(
    <div class="bg-gray-950 h-full">
        <div class="pl-10">
            <div class="bg-stone-900 h-56 w-96 rounded-3xl rounded-t-none text-center z-30 pb-0">
                <h1 class=" text-3xl text-amber-50 pt-24 "  style={{fontFamily:'Kalnia'}}>ABOUT</h1>
            </div>
            <span>
                <div class="absolute left-1/3 pt-24 w-3/5">
                    <div class="bg-zinc-900 rounded-3xl h-72  flex flex-row ">
                        <h1 class="text-amber-50 rotate-90 absolute -left-5 top-56 text-3xl" style={{fontFamily:'Kalnia'}}>EDUCATION</h1>
                        <Image
                            src={schoolpic}
                            alt="School"
                            height={200}
                            width={300}
                            quality={100}
                            class="z-40 left-40 top-32 absolute rounded-3xl border-2 border-white border-opacity-90 hover:opacity-30"/>
                            <Image 
                            src={collegepic}
                            alt="College"
                            height={250}
                            width={400}
                            quality={100}
                            class="z-40 right-4 top-32 absolute rounded-3xl border-2 border-white border-opacity-90 hover:opacity-30"/>
                            <h1 class=" text-base text-amber-50 absolute left-40 top-48 text-center"  style={{fontFamily:'Kalnia'}}>Queen of Angels<br/>Convent Higher Secondary School<br/>10th Grade: 97%<br/>12th Grade:94%</h1>
                            <h1 class=" text-base text-amber-50 absolute right-36 top-56 text-center"  style={{fontFamily:'Kalnia'}}>LNMIIT<br/> IV SEM CGPA:8.4</h1>
                    </div>
                    <div class="pt-14 pl-16 z-10 flex flex-row justify-center">
                        <div class="bg-stone-900 h-96 w-72 rounded-3xl transition duration-500 hover:scale-105 flex-row">
                            <h1 class="text-amber-50 text-center text-lg pt-8 " style={{fontFamily:'Ubuntu'}}>Interests & Hobbies</h1>
                            <ul class="list-disc text-amber-50 list-inside pl-8 pt-4 leading-10 text-base">
                                <li>Play Football</li>
                                <li>Watch Movies & Anime</li>
                                <li>Gymnasium</li>
                                <li>Front-End Development</li>
                                <li>IQ-based problem solving</li>
                            </ul>
                        </div>
                        <div class="pl-20">
                        <div class="bg-stone-900 h-96 w-72 rounded-3xl transition duration-500 hover:scale-105">
                            <h1 class="text-amber-50 text-center text-lg pt-8 " style={{fontFamily:'Ubuntu'}}>Clubs & Societies</h1>
                            <ul class="list-disc text-amber-50 list-inside pl-8 pt-4 leading-10 text-base">
                                <li>GDSC(Dev domain)</li>
                                <li>MediaCell(Member)</li>
                                <li>General Body Member(Sports)</li>
                                <li>Desportivos OC(Sponsorship)</li>
                                <li>Alumini-Association LNMIIT(Member)</li>
                                <li>TedXLNMIIT OC(Sponsorship)</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </span>
            <div class="pl-16 relative top-4 pb-28">
               <Image
                src={pfp}
                alt="Profile Picture"
                height={240}
                width={250}
                quality={100}
                class="rounded-3xl border-2 border-white border-opacity-90 hover:animate-pulse"/>
            </div>
            <div class="bg-zinc-900 z-10 h-72 w-96 rounded-3xl text-left pb-3 transition duration-500 hover:scale-105">
                <p class="z-20 text-white px-4 py-10" style={{fontFamily:'Ubuntu'}}>Sophomore at The LNM Institute of Information Technology , Jaipur.<br/>I am an active coding enthusiast , with passion in various fields like WebDev and competitive coding as well. I am proficient in C and C++ with basic knowledge in Python , Java as well.<br/>I am also aware with HTML , CSS (also using Bootstrap and Tailwind) and JavaScript , node.js, express.js , react.js,next.js and SQL.</p>
            </div>            
        </div>
    </div>
    )
}






