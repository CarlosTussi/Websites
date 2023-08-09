import { useEffect, useState } from "react";
import { Slide } from 'react-awesome-reveal';
import Nav from "./Nav";

const THRESHOLD = 400;

function DesktopNav()
{     
    const [isOpen, setIsOpen] = useState(false);


    const scroll = (anchor) =>{
        const target = document.getElementById(anchor);
        if(target)
        {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });                        
                    
        }
    };

    useEffect(()=>{
        
        const handleScroll = () =>{
            const currentScroll = window.scrollY;

            if(currentScroll >= THRESHOLD)
                setIsOpen(true);
            else
                setIsOpen(false);            
        }

 
        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return(
        <div className="desktop-nav">
            {isOpen? <Slide duration="500"><Nav handleClick={scroll}/></Slide> : ""}
        </div>
    )
}

export default DesktopNav;