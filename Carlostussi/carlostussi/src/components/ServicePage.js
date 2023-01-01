import { VStack, Heading, Box } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { Fade } from "react-awesome-reveal";

import PlanningPage from "./PlanningPage";
import DevelopingPage from "./DevelopingPage";
import LunchingPage from "./LunchingPage";

function ServicePage()
{    
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

        <PlanningPage />
        <DevelopingPage />
        <LunchingPage />
        </>
    );
}

export default ServicePage;