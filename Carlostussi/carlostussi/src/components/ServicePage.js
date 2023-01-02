import { VStack, Heading, } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { Fade } from "react-awesome-reveal";

import * as GUIDE from "../styleguide/colorscheme";
import { ArrowDown, } from 'react-feather';
import PlanningPage from "./PlanningPage";
import DevelopingPage from "./DevelopingPage";
import LunchingPage from "./LunchingPage";

function ServicePage()
{    
    return(
        <>
        <FullScreen id="services">
            <VStack p="50vh 0 0 0"
                    spacing="30vh">
                <Fade duration="2500">
                    <VStack>
                        <Heading as="h1">Building <span style={{color: GUIDE.color.secondary, }}>your</span> website</Heading>
                        <Heading as="h2" size="md">What are the steps?</Heading>
                    </VStack>
                </Fade>
                <Fade duration="2000">
                    <ArrowDown className="arrowDown"
                        color={GUIDE.color.secondary}
                        size="8vh" 
                        strokeWidth="0.5"                   
                        />
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