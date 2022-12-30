import { Heading, VStack, } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import UIButton from "./UIButton";
import { Cpu } from 'react-feather';
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
                <Cpu 
                    color={COLOR.text.header}
                    size="9vh" 
                    strokeWidth="1.2"                   
                    />
            </VStack>
        </FullScreen>
    );
}

export default LandingPage;