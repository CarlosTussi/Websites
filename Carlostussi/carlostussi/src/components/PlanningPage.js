import { VStack, Heading, Box } from "@chakra-ui/react";
import FullScreen from "./FullScreen";

import ServiceCard from "./ServiceCard";

function PlanningPage()
{
    return(
          <FullScreen pages="3">
          <VStack spacing="5vh">    
              <VStack id="cardsSection" p="10vh 0 0 0" position="sticky">
                  <Box position= "sticky" top="6vh" width="100vw" textAlign="center">
                      <Heading id="planning" padding="5vh 0 5vh 0">
                          Planning
                      </Heading>
                  </Box>       
                  {/* Dummy box to give space to the next element */}
                  <Box height="100vh" width="50vw" bg=""></Box>      
                  <ServiceCard top="20vh" margin="0vh 0 0 0" text="Requirements" spacing="40vh"/>
                  <ServiceCard top="40vh" margin="0vh 0 0 0" text="User" spacing="40vh"/>
                  <ServiceCard top="60vh" margin="0vh 0 0 0" text="Prototype"  spacing="15vh"/>                          
              </VStack>   
            
              </VStack> 
              
          </FullScreen>
    );
}

export default PlanningPage;