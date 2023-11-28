import src_img_negroni_sbagliato from '../assets/sbagliato.jpg';
import src_img_espresso_martini from '../assets/espresso.jpg';
import src_img_negroni_gin_and_tonic from '../assets/gintonic.jpg';


export const Cocktail = {
    name: "",               // Name of the cocktail (string)
    ingredients: [{        // List of ingredients (array of objects)
      name: "",            // Name of the ingredient (string)      
      quantity: 0,         // Quantity of the ingredient (number)
      measure: "",         // Measurement for the ingredient (string)
    }],
    garnish: "",            // Garnish for the cocktail (string)
    image: null,            // Image of the cocktail (can be null or any data type)
    image_alt: "",          //Alt descriptive text of the image
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
    garnish: "Orange twist",
    image: src_img_negroni_sbagliato,
    image_alt: "Glass with orange drink inside with ice and garnished with lemon.",
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
    image: src_img_espresso_martini,
    img_alt: "Funil shaped glass with espresso martini drink inside. Garnished with coffee beans.",
    preparation: [
        "Fill a cocktail shaker with ice cubes.",
        "Add vodka, coffee liqueur, simple syrup, and freshly brewed espresso to the shaker.",
        "Shake vigorously for about 10-15 seconds to chill and mix the ingredients.",
        "Strain the cocktail into a chilled martini glas",
        "Optionally, garnish with a few coffee beans on top.",
    ]
}


export const gin_tonic = {
    name: "Gin and Tonic",
    ingredients:[
        {
            name: "Gin",
            quantity: "2",
            measure: "ounces",
        },
        {
            name: "Tonic Water",
            quantity: "4-6",
            measure: "ounces",
        },
        {
            name: "Fresh lime/lemon wedges",
            quantity: "2",
            measure: "pieces",
        },
        {
            name: "Ice Cubes",
            quantity: "-1",
            measure: "",
        }],
        garnish: "Additional lemon/lime wedge",
        image: src_img_negroni_gin_and_tonic,
        img_alt: "Glass with gin and tonic drink inside. Garnished with lemon.",
        preparation:[
            "Fill a glass with ice cubes.",
            "Pour the gin over the ice.",
            "Squeeze a wedge of lime or lemon into the glass and drop it in.",
            "Top up the glass with tonic water.",
            "Give it a gentle stir to mix the ingredients.",
            "Garnish with an additional lime or lemon wedge, if desired.",            
        ]
}