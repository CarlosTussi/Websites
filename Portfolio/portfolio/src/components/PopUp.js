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
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <p>Header</p>
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            <p>Body</p>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button onClick={() => closePopUp()}>Close</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
        </AlertDialog>
        );
}

export default PopUp;