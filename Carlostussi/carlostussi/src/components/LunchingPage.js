import { Heading, Box, VStack } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import * as COLOR from "../styleguide/colorscheme";
import ServiceCard from "./ServiceCard";

function LunchingPage()
{
    return(
        <FullScreen pages="3">
          <VStack spacing="5vh">    
              <VStack id="cardsSection" p="10vh 0 0 0" position="sticky">
                  <Box position= "sticky" top="6vh" width="100vw" textAlign="center">
                      <Heading id="planning" bg={COLOR.background.main} padding="5vh 0 5vh 0">
                          Lunching
                      </Heading>
                  </Box>       
                  {/* Dummy box to give space to the next element */}
                  <Box height="100vh" width="50vw" bg=""></Box>      
                  <ServiceCard top="20vh" margin="0vh 0 0 0" text="Hosting" spacing="40vh"/>
                  <ServiceCard top="40vh" margin="0vh 0 0 0" text="Deploying" spacing="40vh"/>
                    <ServiceCard top="60vh"                                 
                                margin="0 0 0 0" 
                                text="Online"  
                                spacing="15vh"
                                border={`0.5em dotted ${COLOR.background.button}`}/>                          
              </VStack>   
            
              </VStack> 
    </FullScreen>
    );

}

export default LunchingPage;