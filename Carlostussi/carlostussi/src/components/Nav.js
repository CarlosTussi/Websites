import { HStack, ListItem, UnorderedList, Box} from "@chakra-ui/react";
import { Menu, Hexagon, X } from 'react-feather';
import * as GUIDE from "../styleguide/colorscheme";
import SideMenu from "./SideMenu";
import { useState, useRef } from "react";
import MobileMenuProvider from "../contexts/MobileMenuProvider";
import MobileMenu from "./MobileMenu";

function Nav()
{
   

    return(
        <>
        <MobileMenuProvider>
            <MobileMenu />
            <SideMenu />    
        </MobileMenuProvider>         
        </>
    );

}

export default Nav;