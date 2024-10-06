import Banner from '../components/AboutBanner';
import TeamMembers from '../components/Team'; 
import Prueba from './GREENFOXES.jpg'
export default function about() {
    return (    
    <div className="h-screen w-full bg-white">
        <Banner/>
        <div >
            <div className='flex justify-center'>
                <h1 className="text-5xl font-bold animate-fade-down animate-ease-in-out">The Team</h1>          
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center 
            animate-fade-down animate-ease-in-out'>
                <TeamMembers
                    name="Andre Schiaffino"
                    imgSrc={Prueba}
                />
                <TeamMembers
                    name="Daniel Aceves"
                    imgSrc={Prueba}
                />
                <TeamMembers
                    name="Dahir Velazquez"
                    imgSrc={Prueba}
                />
                <TeamMembers
                    name="Gigid He"
                    imgSrc={Prueba}
                />
                <TeamMembers
                    name="Paul Orozco"
                    imgSrc={Prueba}
                />
            </div>
        </div>
    </div>
    );
  }