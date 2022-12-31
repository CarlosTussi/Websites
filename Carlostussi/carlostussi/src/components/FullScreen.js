import { Box } from "@chakra-ui/react";
import * as COLOR from "../styleguide/colorscheme";

function FullScreen(props)
{
    return(
    <Box width="100vw" 
         height= {props.pages ? `${props.pages*100}vh`: "100vh"}
         bg={COLOR.background.main} 
         color={COLOR.text.header}>
            {console.log(props.pages)}
        {props.children}
    </Box>
    );

}

export default FullScreen;