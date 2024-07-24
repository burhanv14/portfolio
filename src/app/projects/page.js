import React from 'react'
import Card from './card'

function Projects() {
  return (
    <div>
        <div class="bg-gray-950 pt-16 md:pt-16 flex flex-col w-full h-auto pb-96 md:pb-20">
          <div class="flex items-center text-center justify-center bg-black h-36 w-full rounded-3xl">
            <h1 class=" text-amber-50 text-3xl " style={{fontFamily:'Kalnia'}}>PROJECTS</h1>
          </div>
          <div class="flex flex-col gap-y-16 w-full items-center pt-8 md:pt-16">
            <div class="flex flex-col md:flex md:flex-row md:gap-x-80 gap-y-8 md:gap-y-0">
            <Card title="College website" desc="We made the LNMIIT college website from scratch. The webiste is built using react.js" button="Visit Website" lk="https://www.lnmiit.ac.in/"/>
            <Card title="SGPA Calculator" desc="Designed and developed a SGPA calculator exclusively based on the grading system of LNMIIT.
•Implemented 3D character-model. Technolgies used: NextJS, Github, Spline, ThreeJS" button="Visit Website" lk="https://main--sgpacalclnmiit.netlify.app/"/>
            </div>
            
            <div class="flex flex-col md:flex md:flex-row md:gap-x-80 gap-y-8 md:gap-y-0">
            <Card title="Personal Portfolio" desc="Designed and developed my own portfolio using NextJS." button="Visit Website" lk="https://portfolio-dsc6avbdg-burhanuddin-voras-projects.vercel.app/"/>
            <Card title="Diabetes Predictor" desc="Built a web-application which predicts diabetes based on input data.•Trained on Kernel SVM, produces
real-time predictions. Technolgies used: HTML, CSS, Kernel SVM(ML), Python(Flask)" button="Github" lk="https://github.com/burhanv14/DiabetesPredictor"/>
            </div>
          </div>
                
        </div>
    </div>
  )
}

export default Projects