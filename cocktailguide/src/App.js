import Home from './pages/Home';
import HamburgerMenuProvider from './providers/HamburgerMenuProvider';
import './styles.css';


import CocktailsDataProvider from './providers/CocktailsDataProvider';

import {negroni_sbagliato, espresso_martini, gin_tonic} from './model/Cocktail';

import {collection, addDoc } from "@firebase/firestore"
import  {db, collection_name}  from './services/firebase.config'
import { useEffect } from 'react';

import Header from './components/Header';

/* ONLY TO POPULATE THE DATABASE IF NEEDED LATER ON*/
// function load_database (){

//   const dataCollection = collection(db, collection_name);
//   addDoc(dataCollection, negroni_sbagliato)
//   .then(addDoc(dataCollection, espresso_martini))
//   .then(addDoc(dataCollection, gin_tonic));
// }


function App() {

  // useEffect(() => {
  //   load_database();
  // }, [])


  return (
 <body>
  <CocktailsDataProvider>
    <HamburgerMenuProvider>   
        <Header />
        <Home />
    </HamburgerMenuProvider>
  </CocktailsDataProvider>
 </body>
  );
}

export default App;
