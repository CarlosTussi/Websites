import { HStack, ListItem, UnorderedList, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";


const social = [
    {
        name: 'GitHub',
        url: 'https://github.com/carlostussi',
        icon: faGithub,
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/cetleite/',
        icon: faLinkedin,
    }

]


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


    const handleNavClick = (anchor) => {
        const section = document.getElementById(anchor);
    
        section.scrollIntoView(
            {
                behavior: "smooth",
                block: "start",
            });
    
    }

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
        >
        <HStack justify="space-between">
            <nav>
                <UnorderedList styleType="none">
                    <HStack spacing="4em">
                        <a key="work" href="/#my-work" onClick={()=> handleNavClick("work")}><ListItem>Work</ListItem></a>
                        <a key="contact" href="/#contact-me"onClick={()=> handleNavClick("contact")} ><ListItem >Contact</ListItem></a>
                    </HStack>
                </UnorderedList>
            </nav>

            <nav>
                <UnorderedList styleType="none">
                    <HStack spacing="2em">
                        {social.map((item) => {
                            return(
                                <a key={item.name} href={item.url}>
                                    <ListItem><FontAwesomeIcon icon={item.icon} size="2x"/></ListItem>
                                </a>
                            );
                        })}
                    </HStack> 
                </UnorderedList>
            </nav>
        </HStack>
    </Box>
    
    );
}

export default Header;