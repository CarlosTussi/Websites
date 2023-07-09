//Receives the cocktail selected. (Obejct from database format)

function CocktailCard(props){
    const cocktail = props.cocktail;
    return(
        <div className="cocktail-card"> 
            <h2>{cocktail.name}</h2>       
            <h3>INGREDIENTS</h3>
            <ul>
                {cocktail.ingredients.map((item, index) => (
                    <li key={index}>
                        <p>{item.quantity} {item.measure} {item.name}</p>
                    </li>
                ))}
            </ul>
            <h3>PREPARATION</h3>
            <ol>
                {cocktail.preparation.map((item, index)=> (
                    <li key={index}>
                         {item}
                    </li>
                ))}
            </ol>
            <h3>GARNISH</h3>
            <ul>
                <li>
                    <p>{cocktail.garnish}</p>
                </li>
            </ul>
            
        </div>
    
    )
}

export default CocktailCard;