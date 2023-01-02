import { Button } from "@chakra-ui/react";
import * as GUIDE from "../styleguide/colorscheme";

function UIButton(props){
    return(
        <a href={props.href} target="_blank" rel="noreferrer">
            <Button className="uiButton"
            borderRadius="16px"
            bg={GUIDE.color.secondary}
            color={GUIDE.color.text}
            type={props.type}
            p="4vh 5vh 4vh 5vh"
            width={props.width}        
            _hover={{
                background: GUIDE.color.secondary,
            }}
            _active={{
                background: GUIDE.color.active,
            }}>
                {props.children}
            </Button>
        </a>
    );
}

export default UIButton;