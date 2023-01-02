import { HStack, ListItem, UnorderedList,} from "@chakra-ui/react";
import { Menu, Hexagon, X } from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";

import { useMobileMenuContext } from "../contexts/MobileMenuProvider";
import { useEffect, useRef, useState } from "react";

function MobileMenu()
{
    const {isOpen, openMenu, closeMenu} = useMobileMenuContext();
    const menuBarRef = useRef();
    const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

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
        <nav
            ref={menuBarRef}

            style={{
            width:"100vw",
            height:"6vh",
            background: GUIDE.color.secondary,
            color: GUIDE.color.text,
            position: "fixed",
            zIndex: "200",
            
            transitionDuration: "0.4s",
            transitionTimingFunction: "ease-in-out",
        }}>                             
            <UnorderedList styleType="none">
                <HStack justify="space-between">
                    <ListItem p="0.6vh 0 0 0"><Hexagon size="4.5vh"/></ListItem>
                    { 
                        isOpen ? <ListItem onClick={()=> closeMenu()} p="0.6vh 2vh 0 0"><X size="4.5vh"/></ListItem> :
                                 <ListItem onClick={()=> openMenu()} p="0.6vh 2vh 0 0"><Menu size="4.5vh"/></ListItem>                                  
                    }
                </HStack>
            </UnorderedList>             
        </nav>
    )
}

export default MobileMenu;