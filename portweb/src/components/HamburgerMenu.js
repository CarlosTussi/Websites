import { useEffect, useRef, } from 'react';
import {useHamburgerMenuContext} from '../providers/HamburgerMenuProvider'

function HamburgerMenu(props)
{
    const {isOpen, setIsOpen} = useHamburgerMenuContext();
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
        <nav className='hamburger-container'>            

            {isOpen? <div className='transparent-background' onClick={()=> setIsOpen(false)} aria-hidden="true"/>: ""}
            <div
                 ref={sideMenuRef}
                 className={`collapsible-hamburger-menu hamburger-content ${isOpen ? 'open' : ''}`}
                 >
                <ul>
                    <li onClick ={() => scroll("work")}>Work</li>
                    <li onClick ={() => scroll("about")}>About</li>
                    <li onClick ={() => scroll("contact")}>Contact</li>
                </ul>

            </div>                            
                
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div> 

    
    </nav>
    );
}

export default HamburgerMenu;
