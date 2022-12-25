import { HStack, ListItem, UnorderedList, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import SocialsMenu from "./SocialsMenu";
import AnchorMenu from "./AnchorMenu";

function Header()
{
    const headerRef = useRef();
    const [previousScrollPosn, setPreviousScrollPosn] = useState(0);
    
    const handleScroll = () => {
        const currentScrollPosn = window.scrollY;
    
        currentScrollPosn > previousScrollPosn ? headerRef.current.style.transform = "translateY(-200px)" : headerRef.current.style.transform = "translateY(0)"
    
        setPreviousScrollPosn(currentScrollPosn);
    }
    
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
         
        
    })

    return(
    
    <Box
        bg="#0A0A0A"    
        color="#39FF14"
        p="1em 2em 1em 1em"
        position="fixed"
        width="100%"
        ref={headerRef}
        transitionProperty="transform"
        transitionDuration="0.4s"
        transitionTimingFunction="ease-in-out"
        fontSize="1.5em"
        >
        <HStack justify="space-between">            
            <AnchorMenu />
            <SocialsMenu />            
        </HStack>
    </Box>
    
    );
}

export default Header;