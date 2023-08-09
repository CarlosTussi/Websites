import React, {useState} from "react";
import { HOME_PAGE_ID } from "../utils/Global";

const DesktopNavContext = React.createContext();

function DesktopNavProvider({children})
{
    const  [currentSection, setCurrentSection] = useState(HOME_PAGE_ID);
    
    return(
    <DesktopNavContext.Provider value={{
        currentSection,
        setCurrentSection,
    }}>
        {children}
    </DesktopNavContext.Provider>
    );
}

export default DesktopNavProvider;
export const useDesktopNavContext = () => React.useContext(DesktopNavContext);