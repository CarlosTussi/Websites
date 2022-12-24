import { HStack, Text } from "@chakra-ui/react";


function Footer()
{
    return(
        <footer>
            <HStack 
                bg="#0A0A0A" 
                color="#39FF14"
                p="1em 2em 1em 1em"
                justify="space-evenly">
                <Text>Carlos Tussi © 2022</Text>
                <Text>{`</>`}</Text>
            </HStack>
        </footer>
    );
}

export default Footer;