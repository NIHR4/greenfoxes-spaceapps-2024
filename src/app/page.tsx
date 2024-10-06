import spaceAppsLogo from "./resources/space_apps_003.webp"
import greenhouse from "./resources/Greenhouse.png"
import solution from "./resources/Solution.png"
import Image from "next/image";

export default function Home(){
  return (
      <div className="flex flex-col justify-center items-center bg-[#FFFBE6] pt-4">
        <div className="flex bg-[#347928] w-full justify-center py-5">
          <h1 className="text-white text-3xl">Mapping Global Emissions</h1>
        </div>
          <div className="flex flex-col bg-[url('./resources/bgImage.png')] items-center gap-4 pb-4">
            <div className="flex flex-col pt-8 text-white px-24 gap-y-7">
              <p>
              Explore the impact of human-caused emissions on our planet with our 
              cutting-edge Greenhouse Gas Mapper. This interactive tool combines satellite 
              and model-based datasets to provide a comprehensive view of greenhouse gas emissions. 
              </p>
              <p>    
                Gain insights into how these emissions contribute to global warming and empower yourself with the knowledge 
                to drive positive change in your community. Click the button below to dive into the map and see the data for yourself!
              </p>
            </div>
            <a href="/application">
              <div className="bg-[#FCCD2A] w-fit items-center justify-center py-3 px-9 rounded-xl font-bold">
                MAP
              </div>
            </a>
              
          </div>
        <div className="flex bg-[#347928] w-full justify-center py-5 mt-4">
            <h1 className="text-white text-3xl">Explore</h1>
        </div>
        <div className="flex flex-row items-center gap-4 pb-4 px-8 border-b-[2px]">
          <div className="flex flex-col gap-y-4 pt-4">
            <h2 className="text-2xl ">The Challenge</h2>
            <p>This challenge focuses on using a combination of  satellite and model-based datasets to accurately map 
              both human-caused  and natural greenhouse gas emissions. By doing so, we aim to enhance our understanding 
              of how these emissions contribute to global warming. For  this challenge, We have chosen to explore Topic 1: 
              Human-Caused  Emissions.</p>
          </div>
          <Image
            src={spaceAppsLogo}
            alt= "Logo Space Apps"
            priority
            width={200}
          />
        </div>
        <div className="flex flex-row items-center gap-4 pb-4 px-8 border-b-[2px]">
          <div className="flex flex-col gap-y-4 pt-4">
            <h2 className="text-2xl ">Greenhouse Gases</h2>
            <p>The release of greenhouse gases by humans, particularly carbon  dioxide (CO2), plays a significant role in climate
               change by trapping  heat from the Sun in the atmosphere. The past decade has seen the  highest recorded temperatures, 
               primarily due to the escalating levels of these gases. This warming has led to more frequent extreme weather  events, rising sea levels, 
               and heightened risks to food and water  security across numerous areas.</p>
          </div>
          <Image
            src={greenhouse}
            alt= "Green house Image"
            priority
            width={200}
          />
        </div>
        <div className="flex flex-row items-center gap-4 pb-4 px-8 border-b-[2px]">
          <div className="flex flex-col gap-y-4 pt-4">
            <h2 className="text-2xl ">What can I do?</h2>
            <p>Reducing carbon emissions is crucial to mitigating climate change and protecting the planet for future generations. Excess carbon dioxide and other 
              greenhouse gases trap heat in the atmosphere, leading to global  warming, rising sea levels, and extreme weather events.</p>
            <p> By cutting  emissions, we can slow down these harmful effects, improve air quality,  protect ecosystems, and promote a more sustainable, healthier  environment.
               Taking action now helps reduce the risks of environmental  disasters and ensures a safer, more stable world for both people and  nature.</p>
          </div>
          <Image
            src={solution}
            alt= "Green house Image"
            priority
            width={200}
          />
        </div>
      </div>
  );
}