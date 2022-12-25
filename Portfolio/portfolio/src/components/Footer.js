import { VStack, HStack, Text, Divider } from "@chakra-ui/react";
import AnchorMenu from "./AnchorMenu";
import SocialsMenu from "./SocialsMenu";


function Footer()
{
    return(
        <footer>
            <VStack 
                bg="#0A0A0A" 
                color="#39FF14"
                p="1em 2em 1em 1em"
                fontSize="1.5em"            
                >                    
                <HStack  
                    justify="space-evenly"
                    width="full">
                    <Text fontSize="4em">{`</>`}</Text>
                    <AnchorMenu />
                </HStack>
                <Divider borderColor="#39FF14"/>
                <VStack p="3em 0 0 0"
                        spacing="2em"                        
                        >
                    <SocialsMenu />
                    <Text>Carlos Tussi © 2023</Text>
                </VStack>
                
            </VStack>
        </footer>
    );
}

export default Footer;