import { VStack, Box } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import * as GUIDE from "../styleguide/colorscheme";

function ServiceCard(props)
{
    return(<>
        <Box 
            border={props.border}
            borderRadius="16px"
            position= "sticky" 
            top={props.top}>
                    <Fade duration="3500">
                        <VStack bg={GUIDE.color.tertiary}
                            color={GUIDE.color.secondary}
                            height="15vh"
                            width="60vw"
                            borderRadius="16px"
                            m={props.margin}                        
                            >
                                <Box m="auto 0 auto 0"
                                    textAlign="center"
                                    fontWeight="bold">
                                    <p>{props.text}</p>
                                </Box>
                        </VStack>
                    </Fade>
                </Box>
                {/* To add spacing to give the long scrolling illusion */}
                <Box height={props.spacing}></Box>
    </>);
}

export default ServiceCard;