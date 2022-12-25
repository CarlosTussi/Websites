import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import imgSrc from "../assets/me.jpeg";
import { useProjectCardContext } from "./contexts/ProjectCardProvider";

function ProjectCard(props)
{
    const {isClicked, currentName, updateProjectCardName} = useProjectCardContext();
    //Box element in order to move the pagination bullets bellow the images
    return(
        <VStack>
            <Heading>{props.title}</Heading>
            <img src={props.imgSrc} alt=""/>
            {/* {updateProjectCardName("CARLOS")} */}
            {/* {console.log(isClicked + "&&" + currentName + "==" + props.title)} */}
            {(isClicked && currentName == props.title) && <Text>INFO</Text>}
            <Box height="3em"></Box>
        </VStack>
    );
}

export default ProjectCard;