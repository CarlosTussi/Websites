import { Heading, VStack, Text, Image } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import reactSrc from "../images/reactlogo.png"
import { Fade } from "react-awesome-reveal";
import UIButton from "./UIButton";

function DevelopingPage()
{
    return(
        <FullScreen>
            <VStack spacing="10vh" p="8vh 0 0 0">
                <Heading>Developing</Heading>
                <Fade duration="3500">
                    <Image display="block" m="0 auto 0 auto" src={reactSrc} boxSize="80%" maxWidth="450px"/>
                </Fade>
                <Text p="0 20vw 0 20vw" align="center">Development will be done using modern React user interface library.</Text>
                <UIButton>What is React</UIButton>                
            </VStack>

        </FullScreen>
    )

}

export default DevelopingPage;