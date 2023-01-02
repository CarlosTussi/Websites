import { Heading, VStack,} from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { ArrowDown, Hexagon} from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";

function LandingPage()
{ 
    return(
        <FullScreen id="home">
            <VStack p="20vh 0 0 0"
                    spacing="15vh">                
                <VStack>
                    <Heading as="h1">Carlos Tussi</Heading>
                    <Heading as="h2">Front-End Dev</Heading>                    
                </VStack>
                {/* <UIButton>Find Out More</UIButton> */}
                <Hexagon size="15vh"/>
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