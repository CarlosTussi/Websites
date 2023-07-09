import React, {useState} from "react";

const CocktailsDataContext = React.createContext();

function CocktailsDataProvider({children})
{
    const  [cocktailsData, setCocktailsData] = useState([]);
    return(
    <CocktailsDataContext.Provider value={{
        cocktailsData,
        setCocktailsData,
    }}>
        {children}
    </CocktailsDataContext.Provider>
    );
}

export default CocktailsDataProvider;
export const useCocktailsDataContext = () => React.useContext(CocktailsDataContext);