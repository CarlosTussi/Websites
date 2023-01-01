import StickyPage from "./StickyPage";
import { Box, } from "@chakra-ui/react";
import { useState, useEffect, } from "react";
import * as GUIDE from "../styleguide/colorscheme";

const card = ["Hosting",
              "Deploying",
              "Online"]

function LunchingPage()
{
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [progressBar, setProgress] = useState(0);

    useEffect(() =>{
        const handleScroll = ()=>{
            const elementScroll = document.getElementById("beforeId2").offsetTop;
            const elementHeight = document.getElementById("beforeId2").offsetHeight;
            const currentScroll = window.scrollY;

            const start = elementScroll;
            const limit = (elementHeight/2 + start);

            currentScroll >= start &&
            currentScroll < (elementHeight/2 + start) ? setIsDisplayed(true) : setIsDisplayed(false);

            console.log("current", currentScroll);
            console.log("top", elementScroll);
            console.log("height", elementHeight);

            console.log("current - top / height: ", (currentScroll-start)/elementHeight);

            setProgress((currentScroll-start) / (limit - start));
        }

        window.addEventListener('scroll', handleScroll);         
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return(
    <>        
        <Box display={isDisplayed ? "block" : "none"}
                 position="fixed"                         
                 width="5vw" 
                 height="65vh"                  
                 top="25vh"
                 left="5vw"
                 borderRadius="16px"
                 bg={GUIDE.color.secondary} 
                 zIndex="1"
                 />
            
            <Box 
                display={isDisplayed ? "block" : "none"}
                position="fixed"
                width="5vw"
                height={`${progressBar*65}vh`}
                top="25vh"
                left="5vw"
                borderRadius="16px"
                bg={GUIDE.color.tertiary} 
                zIndex="2"
                />

            <div id="beforeId2">
            <StickyPage title="Lunching" cards={card} final={true}/>
         </div>
         </>
    );

}

export default LunchingPage;