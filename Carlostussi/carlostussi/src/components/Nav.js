import { HStack, ListItem, UnorderedList, Box} from "@chakra-ui/react";
import { Menu, Hexagon, X } from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";
import SideMenu from "./SideMenu";
import { useState } from "react";

function Nav()
{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <nav style={{
            width:"100vw",
            height:"6vh",
            background: GUIDE.color.secondary,
            color: GUIDE.color.text,
            position: "fixed",
            zIndex: "200",
        }}>                             
            <UnorderedList styleType="none">
                <HStack justify="space-between">
                    <ListItem p="0.6vh 0 0 0"><Hexagon size="4.5vh"/></ListItem>
                    {
                        !isOpen ? <ListItem onClick={()=> setIsOpen(true)} p="0.6vh 2vh 0 0"><Menu size="4.5vh"/></ListItem> :
                                  <ListItem onClick={()=> {
                                                            setIsOpen(false)

                                                            }} p="0.6vh 2vh 0 0"><X size="4.5vh"/></ListItem>
                    }
                </HStack>
            </UnorderedList>  
            {/* <Box bg="#580030" textAlign="center">Better view on mobile</Box>                   */}
        </nav>
        <nav>
            {isOpen && <SideMenu/>}
        </nav>
        </>
    );

}

export default Nav;