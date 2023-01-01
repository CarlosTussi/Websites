import { HStack, ListItem, UnorderedList, } from "@chakra-ui/react";
import { Menu, Hexagon } from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";
function Nav()
{
    return(
        <nav style={{
            width:"100vw",
            height:"6vh",
            background: GUIDE.color.secondary,
            color: GUIDE.color.text,
            position: "fixed",
            zIndex: "10",
        }}>            
            <UnorderedList styleType="none">
                <HStack justify="space-between">
                    <ListItem p="0.6vh 0 0 0"><Hexagon size="4.5vh"/></ListItem>
                    <ListItem p="0.6vh 2vh 0 0"><Menu size="4.5vh"/></ListItem>                   
                </HStack>
            </UnorderedList>        
        </nav>
    );

}

export default Nav;