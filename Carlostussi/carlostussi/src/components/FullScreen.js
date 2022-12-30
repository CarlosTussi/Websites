import { Box } from "@chakra-ui/react";
import * as COLOR from "../styleguide/colorscheme";

function FullScreen({children})
{
    return(
    <Box width="100vw" 
         height="100vh" 
         bg={COLOR.background.main} 
         color={COLOR.text.header}>
        {children}
    </Box>
    );

}

export default FullScreen;