import React from 'react'
import BarChart from './barChart'

function Skills() {
  return (
    <div>
      <div class="bg-gray-950 pt-16 md:pt-16 flex flex-col md:flex md:flex-row w-full h-auto md:gap-x-56">
          <div class="flex items-center text-center bg-black pl-32 md:px-20 h-56 w-full md:w-auto md:h-96 rounded-3xl md:rounded-l-none">
            <h1 class=" text-amber-50 text-3xl " style={{fontFamily:'Kalnia'}}>SKILLS</h1>
          </div>
          <div class="pt-6 px-1 md:px-0md:pt-8 h-56 w-full md:h-96 md:w-3/4">
          <BarChart/>
          </div>
      </div>  
    </div>
  )
}

export default Skills