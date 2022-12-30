import { Button } from "@chakra-ui/react";
import * as COLOR from "../styleguide/colorscheme";

function UIButton(props){
    return(
        <Button 
        borderRadius="16px"
        bg={COLOR.background.button}
        color={COLOR.text.button}
        p="4vh 5vh 4vh 5vh">
            {props.text}
        </Button>
    );
}

export default UIButton;