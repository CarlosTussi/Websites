import Nav from "./Nav";
import { useEffect, useRef, } from 'react';
import {useMobileNavContext} from '../providers/MobileNavProvider';


function MobileNav()
{
    const {isOpen, setIsOpen} = useMobileNavContext();
    const sideMenuRef = useRef();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const scroll = (anchor) =>{
        const target = document.getElementById(anchor);
        if(target)
        {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });                        
                    
            toggleMenu();
        }
    };

    useEffect(()=>{
        if(sideMenuRef.current) //Avoid first render
            if(isOpen)
            {                
                sideMenuRef.current.style.transform = "translateX(0em)";  
            }
            else{                
                sideMenuRef.current.style.transform = "translateX(200vw)";
            }
    },[isOpen])


    return(
        <div className="mobile-nav-container">
            {/* Adds transparent background if hamburger menu open */}
            {isOpen? <div className='transparent-background' onClick={()=> setIsOpen(false)} aria-hidden="true"/>: ""}
            {/* Adds class 'open' of hamburger menu is open */}
            <div ref={sideMenuRef}
                 className={`collapsible-hamburger-menu hamburger-content ${isOpen ? 'open' : ''}`}>
                <Nav handleClick={scroll}/>
            </div>
            
        {/* Creates and controlls the hamburger menu icon */}
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div> 
        </div>
    )
}

export default MobileNav;