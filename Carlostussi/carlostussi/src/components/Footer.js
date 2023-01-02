import { HStack, VStack } from "@chakra-ui/react";
import * as GUIDE from "../styleguide/colorscheme";
import { Linkedin, GitHub } from 'react-feather';

function Footer()
{
    return(
        <footer style={{
            background: GUIDE.color.primary,
            color: GUIDE.color.text,
            padding: "5vh 0 0 0",            
        }}>
            <VStack bg={GUIDE.color.secondary}
                    p="3vh 0 3vh 0">
                <p>Logo</p>
                <HStack spacing="10vw" p="2vh 0 2vh 0">
                    <a href="https://www.linkedin.com/in/cetleite/" target="_blank" rel="noreferrer"><Linkedin className="socialIcon" strokeWidth="0.5px" size="6vh"/></a>
                    <a href="https://github.com/CarlosTussi/" target="_blank" rel="noreferrer"><GitHub className="socialIcon" strokeWidth="0.5px" size="6vh"/></a>
                </HStack>
                <small style={{textAlign: "center"}}>
                    <p>Carlos Tussi</p>
                    <p>2023 All Rights Reserved</p>
                </small>
            </VStack>
            
        </footer>
    );
}

export default Footer;