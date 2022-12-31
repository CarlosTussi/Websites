import { VStack, Heading } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { ArrowDown } from 'react-feather';
import { Fade } from "react-awesome-reveal";

function ServicePage()
{
    return(
        <FullScreen>
            <VStack p="50vh 0 0 0"
                    spacing="30vh">
                <Fade duration="2500">
                    <VStack>
                        <Heading>The Work</Heading>
                        <Heading>What does it take?</Heading>
                    </VStack>
                </Fade>
                <ArrowDown />
            </VStack>
        </FullScreen>
    );
}

export default ServicePage;