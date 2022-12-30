import { color, HStack, ListItem, UnorderedList, } from "@chakra-ui/react";
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
                    <ListItem>Left</ListItem>
                    <ListItem>Right</ListItem>
                </HStack>
            </UnorderedList>        
        </nav>
    );

}

export default Nav;