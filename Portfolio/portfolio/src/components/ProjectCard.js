import { VStack, Heading, Box } from "@chakra-ui/react";
import imgSrc from "../assets/me.jpeg";

function ProjectCard(props)
{
    //Box element in order to move the pagination bullets bellow the images
    return(
        <VStack>
            <Heading>{props.title}</Heading>
            <img src={props.imgSrc} alt=""/>
            <Box height="3em"></Box>
        </VStack>
    );
}

export default ProjectCard;