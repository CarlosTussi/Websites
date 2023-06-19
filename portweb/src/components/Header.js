import MobileNav from './MobileNav';
import MobileLogo from './MobileLogo';
import Nav from './Nav';
import { useHamburgerMenuContext } from '../providers/HamburgerMenuProvider';
import { useRef, useState, useEffect } from 'react';


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
            <header className='header-mobile' ref={menuBarRef}>
                <MobileLogo />
                <MobileNav />
            </header>
            <header className='header-not-mobile'>
                <p>Carlos Tussi</p>
                <Nav />
            </header>
        </>
    )
}

export default Header;