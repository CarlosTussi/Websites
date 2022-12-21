import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const imgSrc = "https://i.pravatar.cc/150?img=7";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    padding="25em 0 25em 0"
  >
    <figure style={{textAlign: "center"}}>
      <img style={{borderRadius: "5em"}} src={imgSrc}/>
      <figcaption style={{paddingTop: "0.7em", fontWeight: "bold"}}>Hello, I'm Carlos</figcaption>
    </figure>

    <div
      style={{fontSize:"60px",
              fontStyle:"bold",
              textAlign: "center",
              fontWeight: "bold",
              padding:"1.5em 0 0 0"}}
    >
      <h1>{bio1}</h1>
      <h1>{bio2}</h1>
    </div>



  </FullScreenSection>
);

export default LandingSection;
