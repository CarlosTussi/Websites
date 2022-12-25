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
import { usePopUpContext } from './contexts/PopUpProvided';

function PopUp()
{
    const cancelRef = useRef();
    const {isOpen, type, closePopUp} = usePopUpContext(); //Destructuring

    return(
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose = {() => console.log("Closing dialog!")}    
            motionPresent = "slideInBottom"            
            >
                <AlertDialogOverlay>
                    <AlertDialogContent 
                            textAlign="center"
                            bg= "black"
                            border="0.1em solid #39FF14"
                            color="#39FF14"
                            >
                                
                        <AlertDialogHeader>
                            <p>Thank You</p>
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            <p>This form is still under construction...</p>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button 
                                m="auto auto"
                                onClick={() => closePopUp()}
                                bg="grey"
                                >Close</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
        </AlertDialog>
        );
}

export default PopUp;