import Image from "next/image"
import challengeLogo from "./space_apps_003.webp"
import greenHouse from "./greenHouseEffectSmall.png"

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
                <div className="flex flex-row gap-6 px-20 pb-4">
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
                <div className="flex flex-col gap-6 px-20 bg-[#C0EBA6] pb-4">
                    <h1 className="text-4xl font-bold pt-4">About CO2</h1>
                    <div>
                        <p>Carbon dioxide (CO2) is an important greenhouse gas released through activities like extracting and burning fossil fuels such as coal, oil, and natural gas, wildfires, and natural events like volcanic eruptions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}