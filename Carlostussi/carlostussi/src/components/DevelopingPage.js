import { Heading, VStack, Text, Image, Box } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import reactSrc from "../images/reactlogo.png"
import { Fade, Rotate } from "react-awesome-reveal";
import UIButton from "./UIButton";
import * as GUIDE from "../styleguide/colorscheme";


function DevelopingPage()
{
    return(
        <FullScreen>
            <VStack spacing="10vh" p="8vh 0 0 0">
                <Box textAlign="center">
                    <Heading  borderBottom={`0.5vh solid ${GUIDE.color.secondary}`} width="50vw" margin="0 auto 0 auto">Step 2</Heading>
                   <Fade duration="2000"><Heading size="lg">Developing</Heading></Fade>
                </Box>
                <Fade duration="3500">
                    <Rotate duration="4000">
                        <Image display="block"   
                            m="0 auto 0 auto" 
                            src={reactSrc} 
                            boxSize="80%" 
                            maxWidth="450px"
                            maxHeight="40vh"
                                                    
                            />
                           </Rotate>
                </Fade>
                <Text p="0 20vw 0 20vw" align="center">Development will be done using modern React user interface library.</Text>
                <UIButton href="https://reactjs.org/">What is React</UIButton>                
            </VStack>

        </FullScreen>
    )

}

export default DevelopingPage;