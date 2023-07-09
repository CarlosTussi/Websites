import Home from './pages/Home';
import HamburgerMenuProvider from './providers/HamburgerMenuProvider';
import './styles.css';
import {negroni_sbagliato, espresso_martini} from './model/Cocktail';

import {collection, addDoc } from "@firebase/firestore"
import  {db, collection_name}  from './services/firebase.config'
import { useEffect } from 'react';
import CocktailsDataProvider from './providers/CocktailsDataProvider';

import HeaderMobile from "./components/HeaderMobile";

/* ONLY TO POPULATE THE DATABASE IF NEEDED LATER ON*/
// function load_database (){

//   const dataCollection = collection(db, collection_name);
//   addDoc(dataCollection, negroni_sbagliato)
//   .then(addDoc(dataCollection, espresso_martini));
// }


function App() {

//   useEffect(() => {
//     load_database();
//   }, [])


  return (
 <body>
  <CocktailsDataProvider>
    <HamburgerMenuProvider>   
        <HeaderMobile/>
        <Home />
    </HamburgerMenuProvider>
  </CocktailsDataProvider>
 </body>
  );
}

export default App;
