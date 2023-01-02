import StickyPage from "./StickyPage";
import { Box, } from "@chakra-ui/react";
import { useState, useEffect,} from "react";
import * as GUIDE from "../styleguide/colorscheme";
import { Fade } from "react-awesome-reveal";

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

            //Changing the value for division will alter the time the progress bar will remain after it finishes
            if(currentScroll >= start &&
                currentScroll < (elementHeight/1.8 + start))
            {
                setIsDisplayed(true);                
            }
            else
            {                    
                setIsDisplayed(false);                                
                
            }

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
                 width="3vw" 
                 height="65vh"                  
                 top="25vh"
                 left="5vw"
                 borderRadius="16px"
                 bg={GUIDE.color.secondary} 
                 zIndex="1"
                 id="baseProgressBar"                 
                 />
            
            <Box 
                display={isDisplayed ? "block" : "none"}
                position="fixed"
                width="3vw"
                height={`${progressBar*65}vh`}
                top="25vh"
                left="5vw"
                borderRadius="16px"
                bg={GUIDE.color.tertiary} 
                zIndex="2"
                id="progressBar"                
                />

            <div id="beforeId2">
            <StickyPage title="Step 3" subtitle="Lunching" cards={card} final={true}/>
         </div>
         </>
    );

}

export default LunchingPage;