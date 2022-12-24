import { HStack, VStack, Box } from "@chakra-ui/react";

//Will contain common style for each section
function FullSection({children, ...props})
{
    return(
            <section>
                <VStack
                    bg="#1B02A3"
                    color="#FFF205"                           
                    justifyContent="center"     
                    textAlign="left"           
                    {...props}     
                    //By default chakra stack aligns center
                    //to change: alignItems="end" (or whatever)                
                    >
                    {children}
                </VStack>
            </section>
    );
}

export default FullSection;