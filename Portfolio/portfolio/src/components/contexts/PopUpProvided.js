import React, { useState } from "react";


const PopUpContext = React.createContext();

function PopUpProvider ({children})
{
    const [popUpInfo, setPopUpInfo] = useState({
        isOpen: false,
        type: "standard" //Indicate what type of popup is it
    })

    return(
        <PopUpContext.Provider value={{
            ...popUpInfo,
            openPopUp: (newType) => setPopUpInfo({
                isOpen: true,
                type: newType,
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
