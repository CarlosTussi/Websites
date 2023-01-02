import React, { useState } from "react";

const MobileMenuContext = React.createContext();

function MobileMenuProvider({children})
{
    const [isOpen, setIsOpen] = useState(false);


    return(
        <MobileMenuContext.Provider value={{
            isOpen,
            openMenu: () => setIsOpen(true),
            closeMenu: () => setIsOpen(false),
        }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export default MobileMenuProvider;
export const useMobileMenuContext = () => React.useContext(MobileMenuContext);