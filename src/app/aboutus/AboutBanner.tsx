"use client";

const Banner: React.FC = () => {
    return (
        <div className="bg-[#347928] text-white p-6 flex-auto">
            <div className="flex justify-between">
            {/*Left*/}
            <div className="flex flex-col ">
                <h1 className="text-5xl font-bold animate-fade-right underline underline-offset-8 ">About The Team</h1>
                <p className="mt-2 text-lg animate-fade-right">We are Green Foxes, a team from CETYS University 
                that has the goal to help out the best way we can! </p>
            </div>
            {/*Right*/}
                 <div className='flex flex-col '>
                 </div>
            </div>
        </div>
    );
}
export default Banner;