import { useEffect, useRef, } from 'react';
import {useHamburgerMenuContext} from '../providers/HamburgerMenuProvider'
import { Award } from 'react-feather';
import { Link } from 'react-router-dom';

function HamburgerMenu()
{
    const {isOpen, setIsOpen} = useHamburgerMenuContext();
    const sideMenuRef = useRef();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
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
                    <Link to="/"><li className='menu-link' onClick ={() => setIsOpen(false)}>COCKTAILS</li></Link>
                    <Link to="/about"><li className='menu-link' onClick ={() => setIsOpen(false)}>ABOUT</li></Link>
                    <Link to="/contact"><li className='menu-link' onClick ={() => setIsOpen(false)}>CONTACT</li></Link>
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
