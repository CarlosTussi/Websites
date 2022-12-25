import React, { useState } from "react";


const PopUpContext = React.createContext();

function PopUpProvider ({children})
{
    const [popUpInfo, setPopUpInfo] = useState({
        isOpen: false,
        type: "standard", //Indicate what type of popup is it
        message: "[default message]",
    })

    return(
        <PopUpContext.Provider value={{
            ...popUpInfo,
            openPopUp: (newType, newMessage) => setPopUpInfo({
                ...popUpInfo,
                isOpen: true,
                type: newType, 
                message: newMessage,           
            }),
            closePopUp: () => {
                setPopUpInfo({
                    isOpen: false,
                    type: "standard",
                })
            }
        }}>
            {children}
        </PopUpContext.Provider>
    )
    
}

export const usePopUpContext = () => React.useContext(PopUpContext);
export default PopUpProvider;
