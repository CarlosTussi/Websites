import { Heading, VStack, } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import UIButton from "./UIButton";
import { ArrowDown, } from 'react-feather';
import * as COLOR from "../styleguide/colorscheme";


function LandingPage()
{
    return(
        <FullScreen>
            <VStack p="30vh 0 0 0"
                    spacing="20vh">                
                <VStack>
                    <Heading as="h1">Carlos Tussi</Heading>
                    <Heading as="h2">Front-End Dev</Heading>                    
                </VStack>
                <UIButton text="Find Out More"/>
                <ArrowDown className="arrowDown"
                    color={COLOR.text.card}
                    size="8vh" 
                    strokeWidth="0.5"                   
                    />
            </VStack>
        </FullScreen>
    );
}

export default LandingPage;