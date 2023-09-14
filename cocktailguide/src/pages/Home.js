import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";

import {collection, getDocs} from "@firebase/firestore"
import  {db, collection_name}  from '../services/firebase.config'
import CocktailsList from "../components/CocktailsList";
import { useCocktailsDataContext } from "../providers/CocktailsDataProvider";
import CocktailCard from "../components/CocktailCard";

function  Home()
{
  const {cocktailsData, setCocktailsData} = useCocktailsDataContext(); //Context containing all the database
  const dataCollection = collection(db, collection_name); //To access firebase database
  
  const [searchbarResult, setSearchbarResult] = useState([]); //Used for state lift design pattern (Home <- SearchBar)
  const [selectedCocktail, setSelectedCocktail] = useState();
  
  const [showSearch, setShowSearch] = useState(false);
  const [showSelectedCocktail, setShowSelectedCocktail] = useState(false);

  const [initialRender, setInitialRender] = useState(true);
  useEffect(()=>{

    //Retrieves all the cocktail info and save in client side structure
    getDocs(dataCollection)
    .then(entries =>  {
        entries.forEach(entry => {                      
            setCocktailsData(oldArray => [...oldArray, entry.data()]);                          
        })
    })    
  },[])


useEffect(() => {
  if(initialRender){
    setInitialRender(false);
    console.log("Initial render");
    return;
  }
  setShowSearch(true);
  setShowSelectedCocktail(false);

  setSelectedCocktail("");
},[searchbarResult]);

useEffect(() => {
  if(selectedCocktail)
  {
    setShowSelectedCocktail(true);
    setShowSearch(false);
  }
},[selectedCocktail]);

const findObjectByName = (array, name) => {
  return array.find(item => item.name === name);
}

    return(
        <div className="home">           
          {(!showSelectedCocktail && !showSearch) && <h1><span>The</span> Cocktail Guide</h1>}
          <Searchbar updateSearchbarResult ={setSearchbarResult}/> 
          {showSearch && <CocktailsList setSelectedCocktail={setSelectedCocktail} list={searchbarResult}/>}
          {showSelectedCocktail && <CocktailCard cocktail={findObjectByName(cocktailsData, selectedCocktail)} />}
          
        </div>
    )
}

export default Home;