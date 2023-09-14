import { useState } from "react";
import { useCocktailsDataContext } from "../providers/CocktailsDataProvider";
import { Search, X } from "react-feather";

function Searchbar(props)
{    
    const [cocktailName, setCocktailName] = useState("");

    const {cocktailsData } = useCocktailsDataContext();


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

    const handleErase = ()=>{
        setCocktailName("");
        props.updateSearchbarResult({});
    }

    return(
        <div className="search-bar">
            <Search className="search-icon" size="1.5em"/>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                id="name"
                name="name"
                placeholder="Search your drink..."
                onChange={handleChange}
                value={props.inputValue? props.inputValue : cocktailName}  
                />
            </form>
            <X className="x-icon" onClick={handleErase} size="1.5em"/>
        </div>
    )
}

export default Searchbar;  