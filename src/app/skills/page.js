import BarChart from './barChart.js'
import React, { useRef } from "react";

export default function Skills(){
    return (
        <div class="bg-gray-950 w-full h-full -z-10">
            <div class=" pt-16 flex flex-row">
                <div class="bg-black text-center z-0 h-96 w-1/3 rounded-3xl rounded-l-none hover:scale-105 transition duration-500 flex-row">
                    <h1 class="text-amber-50 text-3xl pt-44" style={{fontFamily:'Kalnia'}}>SKILLS</h1>
                </div>
                <div class="pl-64 w-full pt-6">
            <div class=" h-96 w-3/4 flex-row hover:scale-110 transition duration-500 ">
                <BarChart/>
            </div>
            </div>
        </div>
        </div>
    )
}







