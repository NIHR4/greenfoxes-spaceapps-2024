import Banner from './AboutBanner';
import TeamMembers from './Team'; 
import Miembro1 from './Andre.jpg';
import Miembro2 from './Daniel.jpg';
import Miembro3 from './dahir.jpg';
import Miembro4 from './FotoGigid.jpg';
import Miembro5 from './Pol.jpg'
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
                    imgSrc={Miembro1}
                />
                <TeamMembers
                    name="Daniel Aceves"
                    imgSrc={Miembro2}
                />
                <TeamMembers
                    name="Dahir Velazquez"
                    imgSrc={Miembro3}
                />
                <TeamMembers
                    name="Gigid He"
                    imgSrc={Miembro4}
                />
                <TeamMembers
                    name="Paul Orozco"
                    imgSrc={Miembro5}
                />
            </div>
        </div>
    </div>
    );
  }