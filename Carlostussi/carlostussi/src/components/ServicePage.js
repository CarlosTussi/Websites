import { VStack, Heading, Box } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { Fade } from "react-awesome-reveal";
import * as COLOR from "../styleguide/colorscheme";

import { useEffect, useState} from "react";

function ServicePage()
{    
    const [isSticky, setIsSticky] = useState(false);
    //Scroll Listener
    useEffect(() => {

        const handleScroll = () =>{            
            const planningScrollY = document.getElementById("lastSticky").offsetTop - 500;        

            console.log("Current scroll: ", window.scrollY); 
            console.log("Position Y: ", planningScrollY); 
            
            window.scrollY >= planningScrollY ? setIsSticky(false) : setIsSticky(true);

        }                                          

        window.addEventListener('scroll', handleScroll);
        return() =>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //Only to do it in the beginning is fine because it will be cleaned up only when the component itself gets destroyed

    return(
        <>
        <FullScreen>
            <VStack p="50vh 0 0 0"
                    spacing="30vh">
                <Fade duration="2500">
                    <VStack>
                        <Heading>The Work</Heading>
                        <Heading>What does it take?</Heading>
                    </VStack>
                </Fade>
            </VStack>
        </FullScreen>

        {/* One page for each step + intro page (total 4 pages)*/}
        <FullScreen pages="3">
            <VStack p="10vh 0 0 0"                    >
                <Box
                position= "sticky" 
                top="6vh"
                width="100vw"
                textAlign="center"               
                >
                    <Heading id="planning"
                             bg={COLOR.background.main}
                             padding="5vh 0 5vh 0">
                                Planning
                    </Heading>
                </Box>
                {/* ESTABLISHING REQUIREMENTS */}
                <Box 
                    position= "sticky" 
                    top="20vh">
                    <Fade duration="3500">
                        <VStack bg={COLOR.background.card}
                            color={COLOR.text.card}
                            height="15vh"
                            width="60vw"
                            borderRadius="16px"
                            m="10vh 0 0 0"                        
                            >
                                <Box m="auto 0 auto 0"
                                    textAlign="center"
                                    fontWeight="bold">
                                    <p>Establish</p>
                                    <p>Requirements</p>
                                </Box>
                        </VStack>
                    </Fade>
                </Box>
                <Box height="40vh"
                     width="50vw"
                     bg=""></Box>
                {/* DEFINE USER */}
                <Box 
                    position= "sticky" 
                    top="30vh">
                    <Fade duration="2500">
                        <VStack bg={COLOR.background.card}
                            color={COLOR.text.card}
                            height="15vh"
                            width="60vw"
                            borderRadius="16px"
                            m="20vh 0 0 0"                        
                            >
                                <Box m="auto 0 auto 0"
                                    textAlign="center"
                                    fontWeight="bold">
                                    <p>Define</p>
                                    <p>User</p>
                                </Box>                            
                        </VStack>
                    </Fade>
                </Box>
                <Box height="40vh"
                     width="50vw"
                     bg=""></Box>
                     {/* DESIGN PROTOTYPE */}
                <Box 
                    position= "sticky" 
                    top="40vh">
                    <Fade duration="2500">
                        <VStack bg={COLOR.background.card}
                            color={COLOR.text.card}
                            height="15vh"
                            width="60vw"
                            borderRadius="16px"
                            m="30vh 0 0 0"                        
                            >
                                <Box m="auto 0 auto 0"
                                    textAlign="center"
                                    fontWeight="bold">
                                    <p>Design</p>
                                    <p>Prototype</p>
                                </Box>
                        </VStack>
                    </Fade>
                </Box>
                <Box 
                     id="lastSticky"
                     height="20vh"
                     width="50vw"
                     bg=""                     
                     position="sticky"
                    top="60vh"></Box>
            </VStack>            
        </FullScreen>
        </>
    );
}

export default ServicePage;