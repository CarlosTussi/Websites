import { Heading, Box, VStack } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import * as GUIDE from "../styleguide/colorscheme";
import ServiceCard from "./ServiceCard";

function StickyPage(props)
{
    return(

        <FullScreen pages="3">
        <VStack spacing="5vh">    
            <VStack p="10vh 0 0 0" position="sticky">
                <Box position= "sticky" top="6vh" width="100vw" textAlign="center">
                    <Heading padding="5vh 0 5vh 0">
                        {props.title}
                    </Heading>
                </Box>       
                {/* Dummy box to give space to the next element */}
                <Box height="100vh" width="50vw" bg=""></Box>      
                <ServiceCard top="25vh" text={props.cards[0]} gap="40vh"/>
                <ServiceCard top="50vh" text={props.cards[1]} gap="40vh"/>
                <ServiceCard top="75vh"                                 
                              text={props.cards[2]}  
                              gap="40vh"
                              border={props.final ? `0.5em dotted ${GUIDE.color.secondary}`:""}/>                          
            </VStack>   
          
            </VStack> 
  </FullScreen>

    );
}

export default StickyPage;