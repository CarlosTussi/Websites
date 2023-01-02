import { Box, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import * as GUIDE from "../styleguide/colorscheme";

function SideMenu()
{
    return(

             <>
            {/* For the reduced opacity of the background */}
            <Box 
                position= "fixed"
                zIndex = "100" 
                top = "6vh"
                height="100vh"
                width="100vw"
                bg={GUIDE.color.primary}
                opacity="0.7"
                >            
            </Box>
            {/* Side menu itself */}
            <VStack
                className="sideMenu"
                position="fixed"
                top="5vh"
                zIndex="150"
                height="50vh"
                width="100vw"
                bg={GUIDE.color.active}
                color={GUIDE.color.text}
                borderRadius="0 0 5vh 5vh"
                p="5vh 0 0 0"
                >
                <UnorderedList 
                            spacing="5vh" 
                            styleType="none"
                            fontSize="2xl"
                            width="full"
                            textAlign="center">
                    <ListItem>About</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Services</ListItem>
                    <ListItem>Work</ListItem>                    
                </UnorderedList>
            </VStack>
        </>
    );
}


export default SideMenu;
