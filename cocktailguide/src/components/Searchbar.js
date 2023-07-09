import { useState } from "react";
import { useCocktailsDataContext } from "../providers/CocktailsDataProvider";

function Searchbar(props)
{    
    const [cocktailName, setCocktailName] = useState("");

    const {cocktailsData, setCocktailsData} = useCocktailsDataContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        setCocktailName("");

    }

    const handleChange = (e) => {
        setCocktailName(e.target.value)
        if(e.target.value === ""){
            props.updateSearchbarResult({});
        }
        else{           
            const userInput = e.target.value.toLowerCase();
    
    
            const result = cocktailsData.filter(entry => entry.name.toLowerCase().includes(userInput));
    
           props.updateSearchbarResult(result);
        }
        
        
    }


    return(
        <div className="search-bar">
            <span>Logo</span>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                id="name"
                name="name"
                placeholder="Search your drink..."
                onChange={handleChange}
                value={cocktailName}  
                />
            </form>
        </div>
    )
}

export default Searchbar;  