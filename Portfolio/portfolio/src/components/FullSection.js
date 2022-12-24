import { HStack, VStack, Box } from "@chakra-ui/react";

//Will contain common style for each section
function FullSection({children, ...props})
{
    return(
            <VStack
                bg="#1B02A3"
                {...props}
                color="#FFF205"                
                justifyContent="center"     
                textAlign="left"           
                h="20em"
                //By default chakra stack aligns center
                //to change: alignItems="end" (or whatever)                
                >
                 {children}
            </VStack>
    );
}

export default FullSection;