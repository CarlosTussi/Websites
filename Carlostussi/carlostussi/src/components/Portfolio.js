import { Heading, VStack, } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { GitHub } from 'react-feather';
import UIButton from "./UIButton";
import { AttentionSeeker, } from "react-awesome-reveal";

function Portfolio()
{
    return(<>
        <FullScreen>
            <VStack spacing="15vh" p="10vh 0 0 0">
                <Heading>Check my GitHub!</Heading>
                <VStack spacing="10vh">
                    <AttentionSeeker effect="tada" duration="2000">                    
                        <GitHub strokeWidth="0.2px" size="30vh"/>                    
                    </AttentionSeeker>
                    <UIButton> {`< CarlosTussi />`}</UIButton>
                </VStack>
            </VStack>
        </FullScreen>
    </>);
}

export default Portfolio;