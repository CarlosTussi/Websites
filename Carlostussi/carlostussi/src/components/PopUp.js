import { 
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogOverlay,
    Button, 
} from '@chakra-ui/react'
import { useRef } from 'react';
import { usePopUpContext } from "../contexts/PopUpProvider";
import * as GUIDE from "../styleguide/colorscheme";

function PopUp()
{
    const cancelRef = useRef();
    const {isOpen, message, closePopUp} = usePopUpContext(); //Destructuring

    return(
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose = {() => console.log("Closing dialog!")}    
            motionPresent = "slideInBottom"  
            isCentered="true"           
            >
                <AlertDialogOverlay>
                    <AlertDialogContent 
                            textAlign="center"
                            bg= {GUIDE.color.primary}                            
                            color={GUIDE.color.text}
                            >
                                
                        <AlertDialogHeader>
                            <p>Thank You</p>
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            <p>{message}</p>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button 
                                m="auto auto"
                                onClick={() => closePopUp()}
                                colorScheme="pink"      
                                >Close</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
        </AlertDialog>
        );
}

export default PopUp;