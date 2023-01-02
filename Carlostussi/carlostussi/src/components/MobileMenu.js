import { HStack, ListItem, UnorderedList,} from "@chakra-ui/react";
import { Menu, Hexagon, X } from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";
import SideMenu from "./SideMenu";

import MobileMenuProvider, { useMobileMenuContext } from "../contexts/MobileMenuProvider";
import { useContext } from "react";

function MobileMenu()
{
    const {isOpen, openMenu, closeMenu} = useMobileMenuContext();

    return(
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
                        isOpen ? <ListItem onClick={()=> closeMenu()} p="0.6vh 2vh 0 0"><X size="4.5vh"/></ListItem> :
                                 <ListItem onClick={()=> openMenu()} p="0.6vh 2vh 0 0"><Menu size="4.5vh"/></ListItem>                                  
                    }
                </HStack>
            </UnorderedList>             
        </nav>
    )
}

export default MobileMenu;