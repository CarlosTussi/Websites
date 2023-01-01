import { Heading, VStack, Box} from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import UIButton from "./UIButton";
import { ArrowDown, } from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";


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
                <UIButton>Find Out More</UIButton>
                <ArrowDown className="arrowDown"
                    color={GUIDE.color.secondary}
                    size="8vh" 
                    strokeWidth="0.5"                   
                    />
            </VStack>
        </FullScreen>
    );
}

export default LandingPage;