import { HStack, ListItem, UnorderedList, Box } from "@chakra-ui/react";

function AnchorMenu()
{
    const handleNavClick = (anchor) => {
        const section = document.getElementById(anchor);
    
        section.scrollIntoView(
            {
                behavior: "smooth",
                block: "start",
            });
    
    }
    
    return(
        <nav>
        <UnorderedList styleType="none">
            <HStack spacing="4em">
                <a key="work" href="/#my-work" onClick={()=> handleNavClick("work")}><ListItem>Work</ListItem></a>
                <a key="contact" href="/#contact-me"onClick={()=> handleNavClick("contact")} ><ListItem >Contact</ListItem></a>
            </HStack>
        </UnorderedList>
    </nav>
    );
}

export default AnchorMenu;