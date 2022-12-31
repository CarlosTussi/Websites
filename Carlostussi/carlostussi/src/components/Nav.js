import { HStack, ListItem, UnorderedList, } from "@chakra-ui/react";
import { Menu, Hexagon } from 'react-feather';
import * as COLOR from "../styleguide/colorscheme";
function Nav()
{
    return(
        <nav style={{
            width:"100vw",
            height:"6vh",
            background: COLOR.background.nav,
            color: COLOR.text.header,
            position: "fixed",
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