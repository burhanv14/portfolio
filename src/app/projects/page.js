import Card from "./card";

export default function Projects(){
    return(
        <div class="bg-gray-950 pt-16 pl-16 flex flex-row pb-16">
                <div class="flex-row w-3/4">
                <div class="flex flex-row gap-16">
                    <div class="flex-row">
                <div class="flex flex-col gap-16">
                <Card title="College website" desc="We made the LNMIIT college website from scratch. The webiste is built using react.js" button="Visit Website" lk="https://www.lnmiit.ac.in/"/>
                <Card title="Portfolio" desc="I designed and coded my personal Portfolio on my own. It is entirely built using next.js" button="Portfolio Link" lk="./"/>
                </div>
                </div>
                <div class=" flex flex-row">
                    <div class="flex flex-col gap-16">
                <Card title="COA design" desc="I built the entire CPU simulation on tk-Gate. It performed tasks using assembly language." button="Github Repo" lk="https://medium.com/@shreyanshagarwal2022/building-a-basic-cpu-simulator-with-tkgate-on-linux-a-journey-into-computer-architecture-0a291a5f8a5c"/>
                <Card title="TedXLNMIIT website" desc="I was in the team which was responsible for bulding the TedXLnmiit website." button="Github Repo" lk="https://www.ted.com/"/>
                </div>
                </div>
                </div>
                </div>
                <div class="pt-16 w-1/3 right-0 pr-3 max-h-dvh">
                    <div class="h-3/4 bg-stone-900  rounded-3xl rounded-e-none transition duration-500 hover:scale-105 text-center">
                    <h1 class="text-amber-50 text-3xl pt-56" style={{fontFamily:'Kalnia'}}>PROJECTS</h1>
                    </div>
            </div>
        </div>
    )
}