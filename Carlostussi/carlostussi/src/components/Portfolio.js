import { Heading, VStack, } from "@chakra-ui/react";
import FullScreen from "./FullScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import UIButton from "./UIButton";
import { AttentionSeeker, } from "react-awesome-reveal";

function Portfolio()
{
    return(<>
        <FullScreen>
            <VStack spacing="20vh" p="10vh 0 0 0">
                <Heading>Check my GitHub!</Heading>
                <VStack spacing="10vh">
                    <AttentionSeeker effect="tada" duration="2000">                    
                        <FontAwesomeIcon icon={faGithub} size="9x"/>                    
                    </AttentionSeeker>
                    <UIButton> {`<CarlosTussi />`}</UIButton>
                </VStack>
            </VStack>
        </FullScreen>
    </>);
}

export default Portfolio;