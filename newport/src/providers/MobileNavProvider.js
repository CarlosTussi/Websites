import React, {useState} from "react";

const MobileNavContext = React.createContext();

function MobileNavProvider({children})
{
    const  [isOpen, setIsOpen] = useState(false);
    return(
    <MobileNavContext.Provider value={{
        isOpen,
        setIsOpen,
    }}>
        {children}
    </MobileNavContext.Provider>
    );
}

export default MobileNavProvider;
export const useMobileNavContext = () => React.useContext(MobileNavContext);