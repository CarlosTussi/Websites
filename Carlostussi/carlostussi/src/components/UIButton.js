import { Button } from "@chakra-ui/react";
import * as GUIDE from "../styleguide/colorscheme";

function UIButton({children}){
    return(
        <Button 
        borderRadius="16px"
        bg={GUIDE.color.secondary}
        color={GUIDE.color.text}
        p="4vh 5vh 4vh 5vh">
            {children}
        </Button>
    );
}

export default UIButton;