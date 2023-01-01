import { Heading, Box, VStack, Text, Image, Button } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import reactSrc from "../images/reactlogo.png"
import { Fade } from "react-awesome-reveal";

function DevelopingPage()
{
    return(
        <FullScreen>
            <VStack spacing="10vh">
                <Heading>Developing</Heading>
                <Fade duration="3500">
                    <Image display="block" m="0 auto 0 auto" src={reactSrc} boxSize="80%"/>
                </Fade>
                <Text p="0 20vw 0 20vw" align="center">Development will be done using modern React user interface library.</Text>
                <Button colorScheme="pink">What is React</Button>
            </VStack>

        </FullScreen>
    )

}

export default DevelopingPage;


/*
<Box position="sticky" top="25vh">
                    <Fade duration="3500">
                        <Image boxSize="30vh" src={reactSrc} />
                    </Fade>                 
                </Box>                                                  
                    <Text height="10vh"  width="100vw" position="sticky" top="50vh">Development will be done using modern React user interface library.</Text>
                <Box height="50vh" width="50vw" bg=""></Box> 

*/ 