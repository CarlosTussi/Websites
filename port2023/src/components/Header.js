import HamburgerMenu from "./HamburgerMenu";
import { useHamburgerMenuContext } from '../providers/HamburgerMenuProvider';
import { useRef, useState, useEffect } from 'react';
import DesktopMenu from "./DesktopMenu";
import src_logo from '../assets/logo.svg';
import src_logo_light from '../assets/logo-light.svg';

function Header()
{
    const {isOpen} = useHamburgerMenuContext();
    const menuBarRef = useRef();
    const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

    //Handles hidding and revealing MobileMenu
    useEffect(() => {                
            const handleScroll =  () => {
            const currentScrollPosition = window.scrollY;            

            if(!isOpen){
                currentScrollPosition > previousScrollPosition ? menuBarRef.current.style.transform = "translateY(-40vh)" : menuBarRef.current.style.transform = "translateY(0)"                            
                

                setPreviousScrollPosition(currentScrollPosition);
        }
    }


        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    },[previousScrollPosition, isOpen])



    return(      
        <>
        <div className="header-mobile" ref={menuBarRef}>
            <div className="header-logo-mobile">
            <img src={src_logo_light} alt="Carlos Tussi logo"></img>
            </div>
            <HamburgerMenu />
        </div>
        <div className="header-desktop">
            <div className="header-logo-desktop">
                <img src={src_logo} alt="Carlos Tussi logo"></img>
            </div>            
            <DesktopMenu />
        </div>
        </>
    )
}

export default Header;