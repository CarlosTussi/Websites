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
    },

]

function SocialsMenu()
{
    return(
        <nav>
            <UnorderedList styleType="none"
                            m="0"
                            p="0">
                    <HStack spacing="2em" >
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
    );
}

export default SocialsMenu;