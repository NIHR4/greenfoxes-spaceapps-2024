import Image from "next/image"
import challengeLogo from "./space_apps_003.webp"
import greenHouse from "./greenHouseEffectSmall.png"
import CO2 from "./Co2Image.jpg"
import energy from "./SustainableEnergy.jpg"
import transport from "./SustanableTransport.jpeg"
import plant from "./planting.jpg"

export default function challenge(){
    return(
        <div className="bg-[#FFFBE6] grow flex flex-row justify-center align-middle w-full pt-4 ">
            <div className="flex flex-col w-[80%]">
                <div className="flex flex-row px-20 gap-8 bg-[#C0EBA6] pb-4">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-bold pt-4">The Challenge</h1>
                        <div className="flex">
                            <p>This challenge focuses on using a combination of satellite and model-based datasets to accurately map both human-caused and natural greenhouse 
                                gas emissions. By doing so, we aim to enhance our understanding of how these emissions contribute to global warming. For this challenge, We have 
                                chosen to explore Topic 1: Human-Caused Emissions.
                            </p>
                        </div>
                    </div>
                    <Image 
                        src={challengeLogo}
                        alt="SpaceApps Logo"
                        priority
                        width={248}
                    />
                </div>
                <div className="flex flex-row gap-6 px-20 py-4">
                <Image 
                        src={greenHouse}
                        alt="GreenHouse Effect Image"
                        priority
                        width={300}
                        height={200}
                    />
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-bold pt-4">About Greenhouse Gas Emissions</h1>
                            <div>
                                <p>The release of greenhouse gases by humans, particularly carbon dioxide (CO2), plays a significant role in climate change by trapping heat from the Sun in the atmosphere. 
                                    The past decade has seen the highest recorded temperatures, primarily due to the escalating levels of these gases. This warming has led to more frequent extreme weather 
                                    events, rising sea levels, and heightened risks to food and water security across numerous areas.</p>
                            </div>
                    </div>
                </div>
                <div className="flex flex-row gap-6 px-20 bg-[#C0EBA6] py-4">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-bold pt-4">About CO2</h1>
                        <div>
                            <p>Carbon dioxide (CO2) is an important greenhouse gas released through activities like extracting and burning fossil 
                                fuels such as coal, oil, and natural gas, wildfires, and natural events like volcanic eruptions.</p>
                        </div>
                    </div>
                    <Image 
                        src={CO2}
                        alt="Co2 Image"
                        width={300}
                    />
                    
                </div>
                <div className="flex flex-col gap-6 px-20 py-4 items-center">
                    <h1 className="text-4xl font-bold pt-4">What Can I Do to Help?</h1>
                    <p>Reducing carbon emissions is crucial to mitigating climate change and protecting the planet for future generations. 
                        Excess carbon dioxide and other greenhouse gases trap heat in the atmosphere, leading to global warming, rising sea levels, 
                        and extreme weather events. By cutting emissions, we can slow down these harmful effects, improve air quality, protect ecosystems, 
                        and promote a more sustainable, healthier environment. Taking action now helps reduce the risks of environmental disasters and ensures 
                        a safer, more stable world for both people and nature.
                    </p>
                    <div className="flex flex-row gap-6 grow w-full ">    
                        <Image
                        src={energy}
                        alt="Sustainable Energy image"
                        width={400}
                        />
                        <Image 
                        src={transport}
                        alt="Transport Image"
                        width={400}
                        />
                        <Image 
                        src={plant}
                        alt="Plant Image"
                        width={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}