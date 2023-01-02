import { Box, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useMobileMenuContext } from "../contexts/MobileMenuProvider";
import * as GUIDE from "../styleguide/colorscheme";



function SideListItem(props)
{
    const { closeMenu } = useMobileMenuContext();
    return(
            <a><ListItem 
                style={{cursor:"pointer"}}
                m="0 0 5vh 0"
                onClick={() => {                    
                    const target = document.getElementById(props.anchor);
                    if(target)
                    {
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                        closeMenu();
                        
                    }
                    // console.log(target);
                }}
                >
                {props.children}
            </ListItem>
        </a>
    );
}

function SideMenu()
{
    const {isOpen} = useMobileMenuContext();
    const menuRef = useRef();

    useEffect(()=>{
        isOpen? menuRef.current.style.transform = "translateY(0vh)" : menuRef.current.style.transform ="translateY(-50vh)"

    },[isOpen])


    return(

             <div>
            {/* For the reduced opacity of the background */}
            <Box       
                display = {isOpen ? "block" : "none"}                          
                position= "fixed"                
                zIndex = "100" 
                top = "6vh"
                height="100vh"
                width="100vw"
                bg={GUIDE.color.primary}
                opacity="0.7"
                >            
            </Box>
            
            {/* Side menu itself */}
            <VStack
                className="sideMenu"
                position="fixed"
                top={isOpen? "0" : "-50vh"}
                zIndex="150"                
                width="100vw"
                bg={GUIDE.color.active}
                color={GUIDE.color.text}
                borderRadius="0 0 5vh 5vh"
                p="10vh 0 0 0"

                ref={menuRef}                
                transitionDuration=".3s"
                transitionTimingFunction="ease-in-out"
                >
                <UnorderedList 
                            spacing="5vh" 
                            styleType="none"
                            fontSize="2xl"
                            width="full"
                            textAlign="center"
                            m="0">
                    <SideListItem anchor="home" >Home</SideListItem>                    
                    <SideListItem anchor="services">Services</SideListItem>
                    <SideListItem anchor="portfolio">Work</SideListItem>      
                    <SideListItem anchor="contactme">Contact</SideListItem>              
                </UnorderedList>
            </VStack>
        </div>
    );
}


export default SideMenu;
