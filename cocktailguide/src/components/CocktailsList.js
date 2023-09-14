import { useState } from 'react';
import { Image } from 'react-feather';


// Receives a list of Cocktails (model) and display them
function CocktailsList (props)
{
    const cocktails = props.list;

    const selectedCocktail = (cocktail) =>{
        console.log("clicked");                
        props.setSelectedCocktail(cocktail)        

        
    }

    return(
        <div className='cocktails-list'>
           <ul>
            {
            Object.keys(cocktails).length > 0 
            &&
            cocktails.map((item, index) => (
                <li key={index} onClick={() => selectedCocktail(item.name)}>
                    <Image color='#C7A252' size='3em'/>
                    <p>Name: {item.name}</p>                    
                </li>
            ))
            }
           </ul>
           
        </div>
    )
}

export default CocktailsList;