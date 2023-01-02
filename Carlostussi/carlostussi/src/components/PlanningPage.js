import StickyPage from "./StickyPage";
import { Box, } from "@chakra-ui/react";
import * as GUIDE from "../styleguide/colorscheme";
import { useState, useEffect, } from "react";

const card = ["Requirements",
                "Users",
            "Prototype",]

function PlanningPage()
{
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [progressBar, setProgress] = useState(0);

    useEffect(() =>{
        const handleScroll = ()=>{
            const elementScroll = document.getElementById("beforeId").offsetTop;
            const elementHeight = document.getElementById("beforeId").offsetHeight;
            const currentScroll = window.scrollY;
        
            const start = elementScroll;
            const limit = (elementHeight/2 + start);

            //Changing the value for division will alter the time the progress bar will remain after it finishes
            currentScroll >= start &&
            currentScroll < (elementHeight/1.8 + start) ? setIsDisplayed(true) : setIsDisplayed(false);
            
            if((currentScroll-start) / (limit - start) < 1)
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
                 bg={GUIDE.color.tertiary} 
                 zIndex="1"
                 id="baseProgressBar" 
                 />
            
            <Box 
                display={isDisplayed ? "block" : "none"}
                position="fixed"
                width="5vw"
                height={`${progressBar*65}vh`}
                top="25vh"
                left="5vw"
                borderRadius="16px"
                bg={GUIDE.color.secondary} 
                zIndex="2"
                id="progressBar" 
                />

            <div id="beforeId">
            <StickyPage id="idme" title="Planning" cards={card}/>   
            </div>                 
        </>
    );
}

export default PlanningPage;