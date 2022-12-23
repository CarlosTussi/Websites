import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    key: "1",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    key: "2",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    key: "3",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    key: "4",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    key: "5",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

const [previousScrollY, setPreviousScrollY] = useState(0);
const headerRef = useRef();

const handleScroll = () => {
  const currentScrollPosY = window.scrollY;

  currentScrollPosY > previousScrollY ? headerRef.current.style.transform = "translateY(-200px)" : headerRef.current.style.transform = "translateY(0)";

  setPreviousScrollY(currentScrollPosY);

}


useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return() => {
    window.removeEventListener('scroll', handleScroll);
  }
})

  return (
    <Box
      position="fixed"
      top={0}      
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <ul style={{listStyleType:"none"}}>
              <HStack>         
                  {socials.map((item) => {                 
                    return (                      
                      <a key={item.key} href={item.url}>
                        <li  style={{padding: "0.5em"}}>
                          <FontAwesomeIcon icon={item.icon} size="2x" />                          
                        </li>
                    </a>);
                  })}
              </HStack>
            </ul>


          </nav>
          <nav>
           <ul style={{listStyleType:"none"}}>
              <HStack spacing={8}>
                <a href="/#projects" onClick={handleClick("projects")}><li key={"project"}>Projects</li></a>
                <a href="/#contact-me" onClick={handleClick("contactme")}><li key={"contactme"}>Contact Me</li></a>
              </HStack>
            </ul>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
