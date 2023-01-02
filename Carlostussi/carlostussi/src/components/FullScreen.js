import { Box } from "@chakra-ui/react";
import * as GUIDE from "../styleguide/colorscheme";

function FullScreen(props)
{
    return(
    <Box width="100vw" 
         height= {props.pages ? `${props.pages*100}vh`: "100vh"}         
         bg={GUIDE.color.primary} 
         color={GUIDE.color.text}
         id= {props.id}
         overflow={props.overflow}
         >
        {props.children}
       
    </Box>
    );

}

export default FullScreen;