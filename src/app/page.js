'use client'
import { Typewriter } from 'nextjs-simple-typewriter'
import { useRouter } from 'next/navigation'
import About from './about/page.js';
import Skills from './skills/page.js'
import Projects from './projects/page.js';
import Footer from './components/footer.js';

export default function Home(){
  const router = useRouter();
  return (
    <main>
      <div className="Home Page" class="max-h-dvh">
      <div>
      <video src={require('./bg_vid.mp4')}  autoPlay loop muted class="top-0 w-full h-dvh object-cover -z-30 relative" /></div>
      <div class="absolute inset-y-72 pl-40">
        <h1 class="text-white text-5xl" style={{fontFamily:'Permanent Marker'}}>
        <Typewriter
            words={['Burhanuddin Vora','Burhanuddin Vora']}
            loop={0}
            cursor
            cursorStyle='.'
            cursorBlinking
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={5000}/>
            </h1>
          <p class="text-white text-xl pb-4" style={{fontFamily:'Ubuntu'}}>An undergraduate at LNMIIT, Jaipur.<br/>M.E.R.N. stack-developer and a coding enthusiast.</p>
          <a href="#_" class="relative  px-5 py-2 font-medium text-white group" onClick={()=>router.push("https://drive.google.com/file/d/1kXwFV9VA7lFMpYrzu2P8MSCNguT0dOA5/view?usp=sharing")}>
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span class="relative">View Resume</span>
          </a>
          </div>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </main>
  )
}





