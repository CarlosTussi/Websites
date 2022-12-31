import { VStack, Heading, Box } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { Fade } from "react-awesome-reveal";
import * as COLOR from "../styleguide/colorscheme";

import { useEffect, useState} from "react";
import ServiceCard from "./ServiceCard";
import { ArrowDown, } from 'react-feather';

function ServicePage()
{    
    const [isDisplayed, setIsDisplayed] = useState(false);
    //Scroll Listener
    useEffect(() => {

        const handleScroll = () =>{            
            const planningScrollY = document.getElementById("cardsSection");       

            console.log("Current scroll: ", window.scrollY); 
            // console.log("OffsetTop: ", planningScrollY.offsetTop);
            // console.log("OffsetParent: ", planningScrollY.offsetParent);
            console.log("OffsetHeight: ", planningScrollY.offsetHeight*1.35); 
            // console.log("OffsetHeigth: ", planningScrollY.offsetHeight);
            
            // window.scrollY >= planningScrollY ? setIsSticky(false) : setIsSticky(true);
               window.scrollY >= planningScrollY.offsetHeight*1.40 &&
               window.scrollY <= planningScrollY.offsetHeight*1.53 ? 
                            setIsDisplayed(true) : 
                            setIsDisplayed(false);

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

        {/* One page for each step + intro page*/}
        <FullScreen pages="3">
        <VStack spacing="5vh">
            <VStack id="cardsSection" p="10vh 0 0 0" position="sticky">
                <Box position= "sticky" top="6vh" width="100vw" textAlign="center">
                    <Heading id="planning" bg={COLOR.background.main} padding="5vh 0 5vh 0">
                        Planning
                    </Heading>
                </Box>       
                {/* Dummy box to give space to the next element */}
                <Box height="100vh" width="50vw" bg=""></Box>      
                <ServiceCard top="20vh" margin="0vh 0 0 0" text="Requirements" spacing="40vh"/>
                <ServiceCard top="40vh" margin="0vh 0 0 0" text="User" spacing="40vh"/>
                <ServiceCard top="60vh" margin="0vh 0 0 0" text="Prototype"  spacing="15vh"/>                          
            </VStack>   
            
            <Box display={isDisplayed ? "block" : "none"}
                 position="fixed"
                 zIndex="20" 
                 bottom="0">
      <ArrowDown                        
                    className="arrowDown"
                    color={COLOR.text.card}
                    size="8vh" 
                    strokeWidth="1"                                                                                     
                    />     
      </Box>
            </VStack> 
            
        </FullScreen>
        </>
    );
}

export default ServicePage;