export const Cocktail = {
    name: "",               // Name of the cocktail (string)
    ingredients: [{        // List of ingredients (array of objects)
      name: "",            // Name of the ingredient (string)      
      quantity: 0,         // Quantity of the ingredient (number)
      measure: "",         // Measurement for the ingredient (string)
    }],
    garnish: "",            // Garnish for the cocktail (string)
    image: null,            // Image of the cocktail (can be null or any data type)
    preparation: [""]       // List of preparation steps (array of strings)
  };



// Examples
export const negroni_sbagliato = {
    name: "Negroni Sbagliato",
    ingredients: [{
        name: "Campari",
        quantity: 1,
        measure: "ounce",        
    },
    {
        name: "Sweet Vermouth",
        quantity: 1,
        measure: "ounce",        
    },
    {
        name: "Prosecco",
        quantity: 1,
        measure: "ounce",        
    },
    {
        name: "Orange Twist",
        quantity: -1,
        measure: "",        
    },
    {
        name: "Ice Cubes",
        quantity: -1,
        measure: "",        
    }],
    garnish: "orange twist",
    image: null,
    preparation: [
        "Fill a rocks glass with ice cubes.",
        "Add Campari and sweet vermouth to the glass.",
        "Stir gently to combine the ingredients.",
        "Top it off with sparkling wine or Prosecco.",
        "Garnish with an orange twist."
    ]
}

export  const espresso_martini = {
    name: "Espresso Martini",
    ingredients: [{
        name: "Vodka",
        quantity: "4",
        measure: "cl",        
    },
    {
        name: "Coffee Liqueur",
        quantity: "2",
        measure: "cl",        
    },
    {
        name: "Syrup",
        quantity: "2",
        measure: "cl",        
    },
    {
        name: "Freshly Brewed Expresso",
        quantity: "1",
        measure: "shot",        
    },
    {
        name: "Coffee Beans",
        quantity: "3",
        measure: "",        
    }],
    garnish: "Coffee beans",
    image: null,
    preparation: [
        "Fill a cocktail shaker with ice cubes.",
        "Add vodka, coffee liqueur, simple syrup, and freshly brewed espresso to the shaker.",
        "Shake vigorously for about 10-15 seconds to chill and mix the ingredients.",
        "Strain the cocktail into a chilled martini glas",
        "Optionally, garnish with a few coffee beans on top.",
    ]
}
