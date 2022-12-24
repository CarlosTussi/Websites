import { HStack, VStack, Box } from "@chakra-ui/react";

//Will contain common style for each section
function FullSection({children, ...props})
{
    return(
            <section>
                <VStack
                    bg="#0A0A0A"
                    color="#39FF14"                           
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