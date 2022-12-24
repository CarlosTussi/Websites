import { HStack, ListItem, UnorderedList, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

const social = [
    {
        name: 'GitHub',
        url: 'https://github.com/carlostussi',
        icon: faGithub,
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/cetleite/',
        icon: faLinkedin,
    }

]

function Header()
{
    return(
    
    <Box
        bg="#0A0A0A"
        color="#39FF14"
        p="1em 2em 1em 1em"
        position="fixed"
        width="100%">
        <HStack justify="space-between">
            <nav>
                <UnorderedList styleType="none">
                    <HStack spacing="4em">
                        <a key="work"><ListItem>Work</ListItem></a>
                        <a key="contact"><ListItem >Contact</ListItem></a>
                    </HStack>
                </UnorderedList>
            </nav>

            <nav>
                <UnorderedList styleType="none">
                    <HStack spacing="2em">
                        {social.map((item) => {
                            return(
                                <a key={item.name} href={item.url}>
                                    <ListItem><FontAwesomeIcon icon={item.icon} size="2x"/></ListItem>
                                </a>
                            );
                        })}
                    </HStack> 
                </UnorderedList>
            </nav>
        </HStack>
    </Box>
    
    );
}

export default Header;