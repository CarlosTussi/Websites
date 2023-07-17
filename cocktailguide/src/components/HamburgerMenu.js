import { useEffect, useRef, } from 'react';
import {useHamburgerMenuContext} from '../providers/HamburgerMenuProvider'
import { Award } from 'react-feather';

function HamburgerMenu()
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
        <div className='hamburger-container'>            

            {isOpen? <div className='transparent-background' onClick={()=> setIsOpen(false)} aria-hidden="true"/>: ""}
            <div
                 ref={sideMenuRef}
                 className={`collapsible-hamburger-menu hamburger-content ${isOpen ? 'open' : ''}`}
                 >
                <ul>
                    <li className='menu-link' onClick ={() => scroll("cocktails")}>COCKTAILS</li>
                    <li className='menu-link' onClick ={() => scroll("about")}>ABOUT</li>
                    <li className='menu-link' onClick ={() => scroll("contact")}>CONTACT</li>
                    <li><Award className="logo" size="1.5em"/></li>
                </ul>

            </div>                            
                
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div> 

    
    </div>
    );
}

export default HamburgerMenu;
