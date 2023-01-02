import { Heading, Box, VStack } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import * as GUIDE from "../styleguide/colorscheme";
import ServiceCard from "./ServiceCard";
import { Fade } from "react-awesome-reveal";

function StickyPage(props)
{
    return(

        <FullScreen pages="3">
        <VStack spacing="5vh">    
            <VStack p="8vh 0 0 0" position="sticky">
                <Box position= "sticky" top="6vh" width="100vw" textAlign="center">
                    <Heading padding="5vh 0 0vh 0" borderBottom={`0.5vh solid ${GUIDE.color.secondary}`} width="40vw" margin="0 auto 0 auto">
                        {props.title}
                    </Heading>
                    <Fade duration="2000"><Heading size="lg">{props.subtitle}</Heading></Fade>
                </Box>       
                {/* Dummy box to give space to the next element */}
                <Box height="75vh" width="50vw" bg=""></Box>      
                <ServiceCard top="25vh" text={props.cards[0]} gap="40vh"/>
                <ServiceCard top="50vh" text={props.cards[1]} gap="40vh"/>
                <ServiceCard top="75vh"                                 
                              text={props.cards[2]}  
                              gap="40vh"
                              border={props.final ? `0.3em dotted ${GUIDE.color.secondary}`:""}/>                          
            </VStack>   
          
            </VStack> 
  </FullScreen>

    );
}

export default StickyPage;