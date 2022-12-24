import { HStack, VStack, Box } from "@chakra-ui/react";

//Will contain common style for each section
function FullSection({children, ...props})
{
    return(
        <section>
            <Box
                bg="#1B02A3"
                color="#FFF205"
                textAlign="center"
                h="20em">
                 {children}
            </Box>
        </section>
    );
}

export default FullSection;