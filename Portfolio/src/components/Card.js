import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import '../index.css'

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <Box style={{
        background: "#C8C8C8",
        color:"black",
        borderRadius: "2em",

      }}>
        <VStack>
          <Image    borderRadius="2em 2em 0 0"
                    borderBottom="dashed 0.15em black"
                    src={imageSrc}
                    alt="my profile icon"/>

          <Heading alignSelf="flex-start"
                    fontWeight="bold"
                    p="2em 0 0 1em"
                    fontSize="1em">
              {title}
          </Heading>

          <Text p="0 1em 0 1em"
                textAlign="justify"
                color="#3E3D3D">
            {description}
          </Text>
        
            <HStack className="seeMoreButton" alignSelf="flex-start"
                    p="0 0 1em 1em">
              <Text>See More</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
       
        </VStack>
      </Box>


  );
};

export default Card;
